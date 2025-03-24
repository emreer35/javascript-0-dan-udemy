const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");

const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 0, 0);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day];

giveaway.textContent = `giveaway end on ${day}, ${date} ${month} ${year} ${hour}:${min}0am`;

// future time in ms

const futureTime = futureDate.getTime();

function getRemaniningTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1 day = 24hr
    // vlaues in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let mins = Math.floor((t % oneHour) / oneMin)
    let sec = Math.floor((t % oneMin) / 1000)

    // set values 
    const values = [days,hours,mins,sec]

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }
    
    items.forEach((item,index) => {
        item.innerHTML = format(values[index])
    })
    if(t<0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">this giveaway has expired</h4>`
    }
}
let countdown = setInterval(getRemaniningTime,1000)
getRemaniningTime();
