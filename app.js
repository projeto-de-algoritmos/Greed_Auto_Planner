let tasks = [];
function submit(titleInput, deadLineInput, timespanInput, timespanHoras) {
    tasks.push(new Task(titleInput, deadLineInput, timespanInput, timespanHoras));
    writeTasks()
}

function removeTask(title) {
    tasks = tasks.filter(task => task.title != title);
    writeTasks()
}

function writeTasks() {
    let fonk = [];
    let computedTasks = computeTasks(tasks);
    computedTasks.forEach((task) => {
        fonk.push(task.generateHTML());
    })
    
    fonk = fonk.join('\n');
    document.getElementById("taskList").innerHTML = fonk;
}