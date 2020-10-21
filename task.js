class Task {
    constructor(title, deadLine, timespanDias, timespanHoras) {
        this.title = title;
        this.deadLine = new Date(deadLine);
        this.timespan = (parseInt(timespanDias) * 24) + parseInt(timespanHoras)
        console.log(timespanHoras)
    }

    generateHTML(){
        return `<div class="task">${this.title} ${this.deadLine} ${this.timespan}</div>`;
    }
}