export function build_card_for_completed_task(task) {
    
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        const radioAndTaskData = document.createElement('div');
        radioAndTaskData.classList.add('radio--task-data');
        taskContainer.appendChild(radioAndTaskData);

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.classList.add('radio');
        radioAndTaskData.appendChild(radioInput);

        const taskDataContainer = document.createElement('div');
        taskDataContainer.classList.add('task-data');
        radioAndTaskData.appendChild(taskDataContainer);

        const taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        taskDataContainer.appendChild(taskTitle);

        const time = document.createElement('small');
        taskDataContainer.appendChild(time);
        time.textContent = task.time;

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-btns');
        taskContainer.appendChild(taskButtons);

        const taskStatus = document.createElement('span');
        taskStatus.textContent = task.status;
        taskStatus.classList.add('completed');
        taskButtons.appendChild(taskStatus);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskButtons.appendChild(deleteBtn);

    return taskContainer;
}


export function build_card_for_incompletd_task(task) {
    
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        const radioAndTaskData = document.createElement('div');
        radioAndTaskData.classList.add('radio--task-data');
        taskContainer.appendChild(radioAndTaskData);

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.classList.add('radio');
        radioAndTaskData.appendChild(radioInput);

        const taskDataContainer = document.createElement('div');
        taskDataContainer.classList.add('task-data');
        radioAndTaskData.appendChild(taskDataContainer);

        const taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        taskDataContainer.appendChild(taskTitle);

        const time = document.createElement('small');
        taskDataContainer.appendChild(time);
        time.textContent = task.time;

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-btns');
        taskContainer.appendChild(taskButtons);

        const abandonBtn = document.createElement('button');
        abandonBtn.textContent = 'Abandon';
        abandonBtn.classList.add('abandon-btn');
        taskButtons.appendChild(abandonBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskButtons.appendChild(deleteBtn);

    return taskContainer;
}


export function build_card_for_abandoned_task(task) {
    
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        const radioAndTaskData = document.createElement('div');
        radioAndTaskData.classList.add('radio--task-data');
        taskContainer.appendChild(radioAndTaskData);

        const abandonedSymbol = document.createElement('span');
        abandonedSymbol.textContent = '⛔';
        abandonedSymbol.classList.add('radio');
        radioAndTaskData.appendChild(abandonedSymbol);

        const taskDataContainer = document.createElement('div');
        taskDataContainer.classList.add('task-data');
        radioAndTaskData.appendChild(taskDataContainer);

        const taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        taskDataContainer.appendChild(taskTitle);

        const time = document.createElement('small');
        taskDataContainer.appendChild(time);
        time.textContent = task.time;

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-btns');
        taskContainer.appendChild(taskButtons);

        const returnButton = document.createElement('button');
        returnButton.textContent = 'Return';
        returnButton.classList.add('return');
        taskButtons.appendChild(returnButton);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskButtons.appendChild(deleteBtn);

    return taskContainer
}
