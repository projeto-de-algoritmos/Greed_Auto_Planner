class Task {
    constructor(title, deadLine, deadLineTime, timespanDias, timespanHoras) {
        this.title = title;
        console.log()
        this.deadLine = new Date(deadLine+'t'+deadLineTime);
        this.deadLineDisplay = new Date(deadLine+'t'+deadLineTime);
        if(timespanDias != '') {
            this.timespan = (parseInt(timespanDias) * 24)
        } else {
            this.timespan = 0;
        }
        if(timespanHoras != '') {
            this.timespan += timespanHoras;
        }
        // this.timespan = (parseInt(timespanDias) * 24) + parseInt(timespanHoras)
        this.start = 0;
        this.finish = 0;
        this.isLate = false;
        this.startInterval;
        this.finishInterval;
    }


    generateHTML() {
        const latenessHtml = () => {
            if(this.isLate) {
                return `<foreignObject x="5%" y="80%" width="150" height="100" >
                            <p xmlns="http://www.w3.org/1999/xhtml" style="color:red">Atraso: ${Math.ceil(this.lateness)} horas</p>
                        </foreignObject>`
            } else {
                return '';
            }
            
        }
        return `<svg width="300" height="301" viewBox="0 0 300 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="301" fill="#ffffff" />

            <foreignObject x="5%" y="5" width="150" height="50">
                <p xmlns="http://www.w3.org/1999/xhtml">${this.title}</p>
            </foreignObject>
            
            <foreignObject x="5%" y="20%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">Data limite</p>
            </foreignObject>

            <foreignObject x="5%" y="25%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">${this.deadLineDisplay.toLocaleDateString()} ${this.deadLineDisplay.getHours()}:${this.deadLineDisplay.getMinutes()}</p>
            </foreignObject>

            <foreignObject x="5%" y="40%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">Tempo nescessário</p>
            </foreignObject>

            <foreignObject x="5%" y="45%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">${this.timespan} Horas</p>
            </foreignObject>

            <foreignObject x="5%" y="60%" width="300" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">Início ${this.startInterval.toLocaleDateString()} ${this.startInterval.getHours()}:${this.startInterval.getMinutes()}</p>
            </foreignObject>

            <foreignObject x="5%" y="65%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">Fim ${this.finishInterval.toLocaleDateString()} ${this.finishInterval.getHours()}:${this.finishInterval.getMinutes()}</p>
            </foreignObject>

            ${latenessHtml()}

            <foreignObject x="85%" y="85%" width="20" height="150">
            <div
            onclick="removeTask('${this.title}')"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="delete_outline_24px">
                        <path id="icon/action/delete_outline_24px" fill-rule="evenodd" clip-rule="evenodd" d="M14.5 3L15.5 4H19V6H5V4H8.5L9.5 3H14.5ZM6 19C6 20.1 6.90002 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z" fill="red" fill-opacity="1"/>
                    </g>
                </svg>
                
            </div>
            </foreignObject>


            <rect x="2" y="53" width="296" height="246" rx="11" stroke="black" stroke-width="4" />
            <rect x="2" y="2" width="296" height="296" rx="11" stroke="black" stroke-width="4" />
        </svg>`

        // return `<div class="task">${this.title} ${this.deadLine} ${this.timespan}</div>`;
    }
}