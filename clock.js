const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let dateSection = document.getElementById('date');
let timeSection = document.getElementById('time');

let setDate = ()=>{
    let todayDate = new Date();
    dateSection.innerText = `${days[todayDate.getDay()]} ${months[todayDate.getMonth()]} ${todayDate.getDate()}, ${todayDate.getFullYear()}`;
}

let time = () => {
    let todayDate = new Date();
    let hrs = todayDate.getHours();
    let meridiem = '';

/*---------- setting the hrs to a 12 hrs format --------------------------------------------------------*/
    if (hrs < 12){//getHours returns values from 0-23
        // values less than 12, no need to format the hrs
        meridiem = 'AM';//values from 0-11 gets us the am format

    }
    else {
        hrs = todayDate.getHours() - 12;//we subtract 12 from the hrs to get back in the 0-12 hr format
        meridiem  = 'PM';//so from 12 and higher, we get pm format
    }

    //numbers less than 10 will be printed with a 0 before, e.g. 04
    if (hrs < 10){
        hrs = '0' + hrs;
    }

/*---------- formatting the minutes --------------------------------------------------------------------*/
    let min = todayDate.getMinutes() < 10 ? '0' + todayDate.getMinutes() : todayDate.getMinutes();//numbers less than 10 will be printed with a 0 before, e.g. 04

/*---------- formatting the seconds --------------------------------------------------------------------*/
    let sec = todayDate.getSeconds() < 10 ? '0' + todayDate.getSeconds() : todayDate.getSeconds();//numbers less than 10 will be printed with a 0 before, e.g. 04

/*---------- setting values to their respective positions ----------------------------------------------*/
    timeSection.innerText = `${hrs}:${min}:${sec} ${meridiem}`;
    setTimeout(time, 1000);//refreshing the method/screen every second
}

let clock = () => {
    setDate();
    time();
}

document.addEventListener("DOMContentLoaded", ()=>{
    clock();
})