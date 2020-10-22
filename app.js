let tasks = [];

function submit() {
    if(document.getElementById('titleInput').value != '') {
        addTask(
            document.getElementById('titleInput').value,
            document.getElementById('deadLineInput').value,
            document.getElementById('deadLineInputTime').value,
            document.getElementById('timespanInputDias').value,
            document.getElementById('timespanInputHoras').value
            );
            document.getElementById('titleInput').value = '';
            document.getElementById('deadLineInput').value = new Date(Date.now().valueOf() + 86400000).toISOString().split('T')[0];
            document.getElementById('deadLineInputTime').value = '00:00';
            document.getElementById('timespanInputDias').value = '';
            document.getElementById('timespanInputHoras').value = '';
        } else {
            alert('Coloque um nome na task')
        }
}
function addTask(titleInput, deadLineInput, deadLineInputTime, timespanInput, timespanHoras) {
    console.log(deadLineInputTime)
    tasks.push(new Task(titleInput, deadLineInput, deadLineInputTime, timespanInput, timespanHoras));
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

function resetDeadline() {
    document.getElementById('deadLineInput').value = new Date(Date.now().valueOf() + 86400000).toISOString().split('T')[0];
    document.getElementById('deadLineInputTime').value = '00:00';
}