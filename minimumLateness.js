
function ISort(taskArray){
    for(let i = 0; i < taskArray.lenght; i++){
        let j = i - 1;
        let aux = taskArray[i].deadline
        while(j >= 0 && taskArray[j].deadline > aux){
            taskArray[j+1] = nums[j]
            j--
        }
        taskArray[j+1] = aux
    }
    return taskArray;
}

function computeTasks(taskArray){
    let sorted = ISort(taskArray)

    let current = 0;
    sorted.forEach(task => {
        let aux = task.deadline - Date.now();
        task.deadline = aux/3600000;
        task.start = current;
        task.finish = current + task.timespan;
        current += task.timespan;    
        if(task.finish > task.deadline){
            task.isLate = true
        }
    })

    return sorted
}