const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    ampm.innerText = "AM";

    if(h > 12) {
        h = h - 12;
        ampm.innerText = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;

    setTimeout(()=>{
        updateClock();
    }, 1000)

}

updateClock();
