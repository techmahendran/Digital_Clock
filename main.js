const time = document.querySelector(".time");

function startTime() {
  // Date Object for time format
  setInterval(() => {
    let dateObj = new Date(),
      hr = dateObj.getHours(),
      min = dateObj.getMinutes(),
      sec = dateObj.getSeconds();
      
// day set form am and pm
    let day = "AM";
    if (hr > 12) {
      day = "PM";
      hr = hr - 12;
    }
    if (hr == 12) {
      hr = 12;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    // Date inset for the time Element
    time.innerHTML = `${hr}:${min}:${sec} ${day}`;
  });
}
// call the time function
startTime();
