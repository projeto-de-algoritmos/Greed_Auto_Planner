class Task {
    constructor(title, deadLine, timespanDias, timespanHoras) {
        this.title = title;
        this.deadLine = new Date(deadLine);
        this.timespan = (parseInt(timespanDias) * 24) + parseInt(timespanHoras)
        this.start = 0;
        this.finish = 0;
        this.isLate = false;
    }

    generateHTML(){
        return `<div class="task">${this.title} ${this.deadLine} ${this.timespan}</div>`;
    }
}