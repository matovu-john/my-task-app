import {build_card_for_completed_task, build_card_for_incompletd_task, build_card_for_abandoned_task} from "./task-cards-builder.js";


export function renderTasks(displayArea, tasks) {
    displayArea.textContent = '';
    
    tasks.forEach((task) => {
        let card;

        if (task.status === 'incomplete') {
            card = build_card_for_incompletd_task(task);
        }
        
        else if (task.status === 'completed') {
            card = build_card_for_completed_task(task);
        }
        
        else if (task.status === 'abandoned') {
            card = build_card_for_abandoned_task(task);
        }
        
        else {
            return;
        }

        displayArea.appendChild(card);
        
    });
}
