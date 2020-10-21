class Task {
    constructor(title, deadLine, timespan) {
        this.title = title;
        this.deadLine = deadLine;
        this.timespan = timespan;
    }

    taskTemplate(title, deadLine, timespan){
        return `<div>${title} ${deadLine} ${timespan}</div>`;
    }
}