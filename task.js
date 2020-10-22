class Task {
    constructor(title, deadLine, timespanDias, timespanHoras) {
        this.title = title;
        this.deadLine = new Date(deadLine);
        this.timespan = (parseInt(timespanDias) * 24) + parseInt(timespanHoras)
        this.start = 0;
        this.finish = 0;
        this.isLate = false;
    }

    generateHTML() {
        return `<svg width="300" height="301" viewBox="0 0 300 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="301" fill="#ffffff" />

            <foreignObject x="5%" y="5" width="150" height="50">
                <p xmlns="http://www.w3.org/1999/xhtml">${this.title}</p>
            </foreignObject>
            
            <foreignObject x="5%" y="20%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">Data limite</p>
            </foreignObject>

            <foreignObject x="5%" y="25%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">${this.deadLine.toLocaleDateString()}</p>
            </foreignObject>

            <foreignObject x="5%" y="50%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">Tempo nescessário</p>
            </foreignObject>

            <foreignObject x="5%" y="55%" width="150" height="150">
                <p xmlns="http://www.w3.org/1999/xhtml">${this.timespan}</p>
            </foreignObject>

            <foreignObject x="85%" y="85%" width="150" height="150">
            <div
            onclick="console.log('shronbs')"
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