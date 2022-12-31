function clock (){
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let meridian;
    if(hours >= 12){
         meridian = "PM";
        
        hours -= 12;
        console.log(meridian);
    }
    else {
        meridian = "AM";
    }

    if(hours < 10) {
        hours = '0' + hours;
    }

    if(min < 10) {
        min = '0' + min;
    }
    if(sec < 10) {
        sec = '0' + sec;
    }

    const hoursSlot = document.getElementById("hours")
    hoursSlot.innerHTML = hours;

    const minsSlot = document.getElementById("mins")
    minsSlot.innerHTML = min;

    const secsSlot = document.getElementById("secs")
    secsSlot.innerHTML = sec;

    const meridianSlot = document.getElementById("mdn")
    meridianSlot.innerHTML = meridian;
    
}

setInterval(() => {
    clock();
}, 1000);

function setAlarm(){
    let wake = document.getElementById("wakeUpTime").value;
    let lunch = document.getElementById("lunchTime").value;
    let nap = document.getElementById("napTime").value;
    let night = document.getElementById("nightTime").value;

    let T = new Date();
    if(T.getHours() == wake){
        document.getElementById("font").innerText = "GOOD MORNING!! WAKE UP !! "
        document.getElementById("imgM").src = "./morningimg.svg"
        document.getElementById("imgM").style.borderRadius = "5px"
        document.getElementById("grab").innerText = "GRAB SOME HEALTHY BREAKFAST!!! "

    }

    if(T.getHours() == lunch){
        document.getElementById("font").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP "
        document.getElementById("imgM").src = "./lunchimg.svg"
        document.getElementById("imgM").style.borderRadius = "5px"
        document.getElementById("grab").innerText = "LET'S HAVE SOME LUNCH !! "

    }

    if(T.getHours() == nap){
        document.getElementById("font").innerText = "GOOD EVENING !! "
        document.getElementById("imgM").src = "./eveningimg.png"
        document.getElementById("imgM").style.borderRadius = "5px"
        document.getElementById("grab").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"

    }

    if(T.getHours() == night){
        document.getElementById("font").innerText = "GOOD NIGHT !! "
        document.getElementById("imgM").src = "./nightimg.png"
        document.getElementById("imgM").style.borderRadius = "5px"
        document.getElementById("grab").innerText = "CLOSE YOUR EYES AND GO TO SLEEP"

    }

  

    function wakeHour(){
        let afterW = parseInt(wake) + 1;
        // console.log(afterW);
        // console.log(wake);
        if(wake < 12){
            if(wake < 11)
                return wake + " AM - " + afterW + " AM "
            else return wake + " AM - " + afterW + " PM "
        }
        else{
            afterW = afterW - 12;
            wake = wake - 12;
            if(wake < 11)
            return wake + " PM - " + afterW + " PM "
            else return wake + " PM - " + afterW + " AM "
        }
    }
    // console.log(wT());

    function lunchHour(){
        let afterL = parseInt(lunch) + 1;
        if(lunch < 12){
            if(lunch < 11)
                return lunch + " AM - " + afterL + " AM "
            else return lunch + " AM - " + afterL + " PM "
        }
        else{
            afterL = afterL - 12;
            lunch = lunch - 12;
            if(lunch < 11)
            return lunch + " PM - " + afterL + " PM "
            else return lunch + " PM - " + afterL + " AM "
        }
    }

    function napHour(){
        let afterN = parseInt(nap) + 1;
        if(nap < 12){
            if(nap < 11)
                return nap + " AM - " + afterN + " AM "
            else return nap + " AM - " + afterN + " PM "
        }
        else{
            afterN = afterN - 12;
            nap = nap - 12;
            if(nap < 11)
            return nap + " PM - " + afterN + " PM "
            else return nap + " PM - " + afterN + " AM "
        }
    }

    function nightHour(){
        let afterNt = parseInt(night) + 1;
        if(night < 12){
            if(night < 11)
                return night + " AM - " + afterNt + " AM "
            else return night + " AM - " + afterNt + " PM "
        }
        else{
            afterNt = afterNt - 12;
            night = night - 12;
            if(night < 11)
            return night + " PM - " + afterNt + " PM "
            else return night + " PM - " + afterNt + " AM "
        }
    }

    document.getElementById("wakeT").innerText = wakeHour();
    document.getElementById("lunchT").innerText = lunchHour();
    document.getElementById("napT").innerText = napHour();
    document.getElementById("nightT").innerText = nightHour();

    // console.log(lT());
}
// console.log(setAlarm());
setAlarm();