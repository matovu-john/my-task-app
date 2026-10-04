const tasksDisplay = document.querySelector('.tasks-display');
import {tasksDisplayManager} from "./modules/ui/tasksDisplayManager.js";


const tasks = [
    {
        id: 1,
        title: 'Sleep',
        time: '1:36Am',
        status: 'incomplete'
    },

    {
        id: 2,
        title: 'Code',
        time: '9:36PM',
        status: 'completed'
    },

    {
        id: 3,
        title: 'Finish food',
        time: '2:36PM',
        status: 'abandoned'
    }
];

tasksDisplayManager(tasksDisplay, tasks);