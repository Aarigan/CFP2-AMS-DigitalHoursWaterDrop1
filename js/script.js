
setInterval( () => {
  let dayTime12 = new Date();
  
  let hour = dayTime12.getHours();
  let minutes = dayTime12.getMinutes();
  let seconds = dayTime12.getSeconds();
  //time 12h
  let amPm = hour < 12  ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour === 0 ? hour = 12 : hour;
  //add digit 0
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock-hour").innerHTML = hour;
  document.getElementById("clock-minute").innerHTML = minutes;
  document.getElementById("clock-second").innerHTML = seconds;
  document.querySelector(".clock-ampm").innerHTML = amPm;

}, 1000); //1000 milliseconds  = 1s