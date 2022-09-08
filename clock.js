const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let dateSection = document.getElementById('date');
let timeSection = document.getElementById('time');

/*---------- get date and set it in the html file -----------------------------------------------------*/
let setDate = ()=>{
    let today = new Date();
    //it's faster to load days and months from arrays than using a bunch of ifs
    dateSection.innerText = `${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
}

/*---------- get time and set it in the html file -----------------------------------------------------*/
let time = () => {
    let today = new Date();
    let hrs = today.getHours();//getHours returns values from 0-23
    let meridiem;

    if (hrs === 0){// if we get a 0,
        hrs = 12;//we set hrs to 12 which is the starting value instead of 0
        meridiem  = 'AM';// getting a 0 means it's midnight, therefore we get AM
    }

    else if (hrs < 12){// values less than 12, there's no need to format the hrs
        meridiem = 'AM';//values from 0-11 gets us the am format
    }

    else if(hrs === 12){// if we get a 12, no need to format the hrs; leave it as it is
        meridiem  = 'PM';//so from 12 and higher, we get pm format
    }

    //adjusting the hrs to a 12 hrs format with values higher than 12.
    else {
        hrs = hrs - 12;//we subtract 12 from the hrs to get in the 1-11 pm range. E.g. 14-12 = 2
        meridiem  = 'PM';//so from 12 and higher, we get pm format
    }

    //hrs less than 10 will be printed with a 0 before for aesthetics purposes, e.g. from 4 to 04
    if (hrs < 10){
        hrs = '0' + hrs;
    }

    //formatting the minutes for aesthetics purposes
    let min = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();//numbers less than 10 will be printed with a 0 before, e.g. 04

    //formatting the seconds for aesthetics purposes
    let sec = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();//numbers less than 10 will be printed with a 0 before, e.g. 04

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