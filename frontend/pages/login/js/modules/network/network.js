import {API_BASE} from "../../main.js";


export function uploadForm(form) {
    fetch(`${API_BASE}/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    });
}