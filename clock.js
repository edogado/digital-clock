const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let todayDate = new Date();

let dayName = document.getElementById('day-name');
let month = document.getElementById('month');
let day = document.getElementById('day')
let year = document.getElementById('year')

let hours = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let meridiem = document.getElementById('meridiem')

const date = ()=>{
    dayName.innerText = days[todayDate.getDay()] + '';
    month.innerText = months[todayDate.getMonth()] + ' ';
    day.innerText = todayDate.getDay().toString() + ", ";
    year.innerText = todayDate.getFullYear().toString();
}

const time = () => {
    let todayDate = new Date();
    if (todayDate.getHours() >= 13){
        hours.innerText = (todayDate.getHours() - 12).toString();
        meridiem.innerText = 'PM'
    }
    else {
        hours.innerText = todayDate.getHours().toString();
        meridiem.innerText = 'AM'
    }
    min.innerText = todayDate.getMinutes().toString();
    sec.innerText = todayDate.getSeconds().toString()
    setTimeout(time, 1000);
}

let clock = () => {
    date();
    time();
}

document.addEventListener("DOMContentLoaded", ()=>{
    clock();
})