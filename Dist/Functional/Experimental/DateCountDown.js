'use strict'

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}

const InitializeDateCountDown = () => {

    const targetDate = document.querySelector('[wt-datecount-element="target-date"]');

    if (!targetDate) return;

    var countDownDate = new Date(targetDate.innerText).getTime();

    if (!isDateValid(countDownDate)) return;

    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }

        const _targetYear   = document.querySelector('[wt-datecount-element="target-year"]');
        const _targetMonth  = document.querySelector('[wt-datecount-element="target-month"]');
        const _targetDay    = document.querySelector('[wt-datecount-element="target-day"]');
        const _targetHour   = document.querySelector('[wt-datecount-element="target-hour"]');
        const _targetMin    = document.querySelector('[wt-datecount-element="target-minute"]');
        const _targetSec    = document.querySelector('[wt-datecount-element="target-second"]');

        // Time calculations for days, hours, minutes and seconds
        var year    = Math.floor(distance / (1000 * 60 * 60 * 24));
        var month   = Math.floor(distance / (1000 * 60 * 60 * 24));
        var days    = Math.floor(distance / (1000 * 60 * 60 * 24));

        var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (_targetYear) _targetYear.innerText = year
        if (_targetMonth) _targetMonth.innerText = month
        if (_targetDay) _targetDay.innerText = days
        if (_targetHour) _targetHour.innerText = hours
        if (_targetMin) _targetMin.innerText = minutes
        if (_targetSec) _targetSec.innerText = seconds

    }, 1000);
}

window.addEventListener('DOMContentLoaded', InitializeDateCountDown());
