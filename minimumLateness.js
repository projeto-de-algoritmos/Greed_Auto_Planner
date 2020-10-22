
function ISort(taskArray){
    for(let i = 0; i < taskArray.length; i++){
        let j = i - 1;
        let aux = taskArray[i]
        while(j >= 0 && taskArray[j].deadLine < aux.deadLine){
            taskArray[j+1] = taskArray[j]
            j--;
        }
        taskArray[j+1] = aux
    }
    return taskArray;
}

function computeTasks(taskArray){
    let sorted = ISort(taskArray)
    let current = 0;
    sorted.forEach(task => {
        let aux = task.deadLineDisplay - Date.now();
        task.deadLine = ((aux/1000)/60)/60;
        task.start = current;
        task.finish = current + task.timespan;
        current += task.timespan;    
        if(task.finish > task.deadLine){
            task.isLate = true
            task.lateness = task.finish - task.deadLine;
        }
        task.startInterval = new Date(Date.now() + (((task.start*60)*60)*1000))
        task.finishInterval = new Date(Date.now() + (((task.finish*60)*60)*1000))
    })

    return sorted
}