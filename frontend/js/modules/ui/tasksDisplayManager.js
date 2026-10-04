import {create_container_for_completed_task, create_container_for_incompletd_task, create_container_for_abandoned_task} from "./display-tasks.js";


export function tasksDisplayManager(displayArea, tasks) {
    displayArea.textContent = '';
    
    tasks.forEach((task) => {
        let container;

        if (task.status === 'incomplete') {
            container = create_container_for_incompletd_task(task);
        } else if (task.status === 'completed') {
            container = create_container_for_completed_task(task);
        } else if (task.status === 'abandoned') {
            container = create_container_for_abandoned_task(task);
        }
        
        else {
            return;
        }

console.log(container)
        displayArea.appendChild(container);
        
    });
}