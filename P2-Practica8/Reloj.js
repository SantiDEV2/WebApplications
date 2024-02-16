export default function hms(){
    let fecha = new Date();
    let hrs = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();
    let seconds;


    setInterval(function () {
        console.log(hms());
    }, 1000);
    
    seconds = sec < 10 ? seconds = `0${sec}` : seconds = sec;
    let minutes;
    minutes = min < 10 ? minutes = `0${min}` : minutes = min;
    let hours;
    let isPm = hrs % 12 > 0;
    let gmt = isPm ? "pm" : "am";

    if (hrs == 12) {
        hours = 12;
    }
    else if (hrs != 12) {
        if (hrs % 12 < 10) {
            hours = `0${hrs % 12}`;
        } else {
            hours = hrs % 12;
        }
    }
    return `${hours}:${minutes}:${seconds} ${gmt}`;
}
