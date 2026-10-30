export {API_BASE} from "../../../config/API_BASE.js";

import {validate, matchValues} from "./modules/validation.js";
import {displayMessage} from "./modules/ui.js";
import {uploadForm} from "./modules/network/network.js";


const fields = document.querySelectorAll('.field');

const tracker = {}

for (let field of fields) {

    const input = field.querySelector('input');
    const messageArea = field.querySelector('p');

    tracker[input.name] = false;

    input.addEventListener('input', function() {
        const rules = this.dataset;
        const value = this.value;

        messageArea.textContent = '';

        const validationFeedback = validate(value, rules);

        if (!validationFeedback.valid) {
            tracker[input.name] = false;
            displayMessage(messageArea, validationFeedback.message);
            return;
        }

        tracker[input.name] = true;
    });
}


document.querySelector('form').addEventListener('submit', (event) => event.preventDefault());

document.querySelector('.signup-btn').addEventListener('click', (event) => {
    
    const password2 = document.querySelector('[data-match]');
    if (password2) {
        const field = password2.closest('div');
        const messageArea = field.querySelector('p');
       // messageArea.textContent = '';
        
        const feedBack = matchValues(password2)
        if (!feedBack.valid) {
            displayMessage(messageArea, feedBack.message);
            tracker.password2 = false;
            return;
        } else {
            tracker.password2 = true;
        }
    }
    
    const allFieldsValid = Object.values(tracker).every(status => status === true);

    if(!allFieldsValid) return;
    
    const formData = {}
    fields.forEach((field) => {
        const input = field.querySelector('input');
        formData[input.name] = input.value;
    });
    console.log(formData)
    uploadForm(formData);
    console.log('form uploaded')
});