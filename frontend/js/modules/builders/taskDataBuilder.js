function createId() {
   const str1 = Date.now().toString(36);
   const str2 = Math.random().toString(36).slice(2);

    const id = str1 + str2;
    return id;
}

export function buildTaskData(value) {
    const now = new Date();

    const taskData = {
        time: `${now.getHours()}:${now.getMinutes()}PM`,
        title: value,
        status: 'incomplete',
        id: createId()
    }

    return taskData;
}