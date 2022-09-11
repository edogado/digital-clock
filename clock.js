const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let daySection = document.getElementById('day');
let timeSection = document.getElementById('time');
let dateSection = document.getElementById('date');

/*---------- get date and set it in the html file -----------------------------------------------------*/
let setDate = ()=>{
    let today = new Date();
    //it's faster to load days and months from arrays than using a bunch of if/switch cases
    daySection.innerText = `${days[today.getDay()]} `
    dateSection.innerText = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
}

/*---------- get time and set it in the html file -----------------------------------------------------*/
let time = () => {
    let today = new Date();
    let hrs = today.getHours();//getHours returns values from 0-23
    let meridiem = 'AM';


    /*---------- Logic for the 12 hrs format --------------------------------------------------*/
    if (hrs === 0) hrs = 12;//we set hrs to 12 which is the starting value instead of 0; 12 am

    // if we get a 12, no need to format the hrs; leave it as it is
    if(hrs === 12) meridiem  = 'PM';//so from 12 and higher, we get pm format

    //adjusting the hrs to a 12 hrs format with values higher than 12.
    if(hrs > 12) {
        hrs = hrs - 12;//we subtract 12 from the hrs to get in the 1-11 pm range. E.g. 14-12 = 2
        meridiem  = 'PM';//so from 12 and higher, we get pm format
    }


    /*---------- logic for the string format of the numbers -----------------------------------*/
    //hrs less than 10 will be printed with a 0 before for aesthetics purposes, e.g. from 4 to 04
    if (hrs < 10) hrs = '0' + hrs;

    //formatting the minutes for aesthetics purposes
    let min = today.getMinutes() < 10 ?  `0${today.getMinutes()}` : today.getMinutes();//numbers less than 10 will be printed with a 0 before, e.g. 04

    //formatting the seconds for aesthetics purposes
    let sec = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();//numbers less than 10 will be printed with a 0 before, e.g. 04


    //setting values to their respective positions for the html file
    timeSection.innerText = `${hrs}:${min}:${sec} ${meridiem}`;
    setTimeout(time, 1000);//refreshing the method/screen every second
}

/*---------- clock method contains the methods we need ------------------------------------------------*/
let clock = () => {
    setDate();
    time();
}

document.addEventListener("DOMContentLoaded", ()=>{
    clock();
})