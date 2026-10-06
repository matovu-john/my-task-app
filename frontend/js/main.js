const API_BASE = location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://padhox-task-app-backend.onrender.com';

import {renderTasks} from "./modules/ui/renderTasks.js";

const tasksDisplay = document.querySelector('.tasks-display');
const taskButtons = document.querySelectorAll('a');


taskButtons.forEach((button) => {  
    
    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        const activeBtn = document.querySelector('#active');
        
        if (activeBtn) {
            activeBtn.removeAttribute('id');
            button.setAttribute('id', 'active');
        }

        fetchData(`${API_BASE}${button.getAttribute('href')}`).then(tasks => renderTasks(tasksDisplay, tasks));
});
    });


async function fetchData(url) {

    let res = await fetch(url);
    const data = await res.json();

    return data;  
}


fetchData(API_BASE + document.querySelector('#active').getAttribute('href')).then(tasks => renderTasks(tasksDisplay, tasks));
