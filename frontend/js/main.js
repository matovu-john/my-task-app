const API_BASE = location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://padhox-task-app-backend.onrender.com';

const tasksDisplay = document.querySelector('.tasks-display');
const taskButtons = document.querySelectorAll('a');
import {tasksDisplayManager} from "./modules/ui/tasksDisplayManager.js";

taskButtons.forEach((button) => {  
    
    button.addEventListener('click', (event) => {
        event.preventDefault();
       // history.pushState(null, '', button.href);
        
        const activeBtn = document.querySelector('#active');
        
        if (activeBtn) {
            activeBtn.removeAttribute('id');
            button.setAttribute('id', 'active');
        }

        const url = API_BASE + button.getAttribute('href');

        renderTasks(url);
});
    });


async function fetchData(url) {

    let res = await fetch(url);
    const tasks = await res.json();

    return tasks;  
}


async function renderTasks(url) {
     const tasks = await fetchData(url);

    tasksDisplayManager(tasksDisplay, tasks);
}


renderTasks(API_BASE + document.querySelector('#active').getAttribute('href'));
