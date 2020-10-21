const tasks = [];
function submit(titleInput, deadLineInput, timespanInput, timespanHoras) {
    tasks.push(new Task(titleInput, deadLineInput, timespanInput, timespanHoras));
    writeTasks()
}

function writeTasks() {
    let fonk = [];
    tasks.forEach((task) => {
        fonk.push(task.generateHTML());
    })
    
    fonk = fonk.join('\n');
    document.getElementById("taskList").innerHTML = fonk;
}