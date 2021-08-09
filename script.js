window.onload = function () {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("August 9, 2020 00:00:00", 'counter');
};
function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);

    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    console.log(days);
    years = Math.floor(days / 365);
    if (years >= 1) { days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);

    var yearID = document.getElementById("year");
    var dayID  = document.getElementById("day");
    var hourID = document.getElementById("hour");
    var minID  = document.getElementById("minute");
    var secID  = document.getElementById("second");

    if (years == 1) {
        yearID.innerHTML = years + " Year";
    } else {
        yearID.innerHTML = years + " Years";
    }

    if (days == 1) {
        dayID.innerHTML = days + " Day";
    } else {
        dayID.innerHTML = days + " Days";
    }

    if (hours == 1) {
        hourID.innerHTML = hours + " Hour";
    } else {
        hourID.innerHTML = hours + " Hours";
    }

    if (mins == 1) {
        minID.innerHTML = mins + " Minute";
    } else {
        minID.innerHTML = mins + " Minutes";
    }

    if (secs == 1) {
        secID.innerHTML = secs + " Second";
    } else {
        secID.innerHTML = secs + " Seconds";
    }

    if (years >= 1 && days == 0) {
        document.getElementById("subtitle").style.display = "inline-block"; 
        document.getElementById("images").style.display = "inline-block"; 
    }

    /*
    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
    */

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function () { countUpFromTime(countFrom, id); }, 1000);
}