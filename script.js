// setInterval keeps the clock running as long as the browser is open
setInterval(function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = "AM";

    // if statements to determine if the clock should display in AM or PM
    // all of the data will be grabbed from your local computer to display the time 
    if (hours >= 12) {
        period = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
  
    // defined clock variable and grabbed (id="clock") from index.html and injected the clock time using innerText
    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000);
// ^ 1000 is the interval, in milliseconds the clock will run 