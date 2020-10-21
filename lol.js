// const taskTemplate = (title, deadLine, timespan) => `<svg width="300" height="301" viewBox="0 0 300 301" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
//             <rect width="300" height="301" fill="#ffffff"/>\n\
//             <text class="titleText" x="103" y="17">${title}</text>\n\
//             <text class="deadLineText" x="20" y="31">${deadLine}</text>\n\
//             <text class="timespanText" x="20" y="151">${timespan}</text>\n\
//             <rect x="2" y="53" width="296" height="246" rx="11" stroke="black" stroke-width="4"/>\n\
//             <rect x="2" y="2" width="296" height="296" rx="11" stroke="black" stroke-width="4"/>\n\
//             </svg>`;

const taskTemplate = (title, deadLine, timespan) => `<div>${title} ${deadLine} ${timespan}</div>`
function submit() {
    console.log(document.getElementById('titleInput').value, 'damn')
    console.log(document.getElementById('deadLineInput').value, 'damn')
    console.log(document.getElementById('timespanInput').value, 'damn')
}