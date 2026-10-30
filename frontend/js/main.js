import {API_BASE} from "../config/API_BASE.js";


import {renderTasks} from "./modules/ui/renderTasks.js";
import {fetchData, uploadTask, deleteTask, updateTask} from "./modules/network/network.js";
import {buildTaskData} from "./modules/builders/taskDataBuilder.js";
import {helper} from "./modules/helpers/helper.js";



const tasksDisplay = document.querySelector('.tasks-display');
const taskButtons = document.querySelectorAll('.filter-btn');


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



fetchData(API_BASE + document.querySelector('#active').getAttribute('href')).then(tasks => renderTasks(tasksDisplay, tasks));


const taskInput = document.querySelector('.task-input');
const addTaskBtn = document.querySelector('.add-task-btn');

addTaskBtn.addEventListener('click', ()=> {
    let task = taskInput.value;

    if (task === '') {
        return;
    }

    const taskData = buildTaskData(task);
    uploadTask(API_BASE, taskData).then(res => {
        if (res.ok) {
            taskInput.value = '';
            taskButtons[0].click();
        }
    })

});



const taskListContainer = document.querySelector('.tasks-display');

taskListContainer.addEventListener('click', (event) => {
    const clicked = event.target;
    const card = event.target.closest('.task');
    let taskId = card.id;
    
    if (clicked.classList.contains('delete-btn')) {
        deleteTask(taskId);
        card.style.display = 'none';
        return;
    }

    //////////////////////////////////////////////////

    if (clicked.classList.contains('abandon-btn')) {
        const newStatus = 'abandoned';
        helper.changeStatus(taskId, newStatus);
        return;
    }

    //////////////////////////////////////////////////

    if (clicked.classList.contains('radio')) {
        const newStatus = card.classList.contains('completed-task') ? 'incomplete' : 'completed';     
        helper.changeStatus(taskId, newStatus);
        return;
    }

    //////////////////////////////////////////////////

    if (clicked.classList.contains('return')) {
        const newStatus = 'incomplete';
        helper.changeStatus(taskId, newStatus);
        return;
    }
});