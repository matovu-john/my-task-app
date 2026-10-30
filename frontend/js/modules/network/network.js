import {API_BASE} from "../../../config/API_BASE.js";


export async function fetchData(url) {

    let res = await fetch(url);
    const data = await res.json();

    return data;  
}

////////////////////////////////////////////////////////////

export async function uploadTask(api_base, taskData) {
    
    const res = await fetch(`${api_base}/api/tasks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(taskData)
    });

    return res;
}

////////////////////////////////////////////////////////////

export async function deleteTask(taskId) {
    const res = await fetch(`${API_BASE}/api/tasks?id=${taskId}`, {
        method: 'DELETE'
    });
}

////////////////////////////////////////////////////////////

export async function updateTask(taskId, newStatus) {
    const res = await fetch(`${API_BASE}/api/tasks?id=${taskId}&status=${newStatus}`, {
        method: 'PATCH'
    });

    return res;
}