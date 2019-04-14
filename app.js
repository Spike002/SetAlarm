var setAlarmbtn = document.getElementById('setAlarm');
var vid = document.getElementById('myVideo');
var pausevid = document.getElementById('pauseVideo');
var opt = "";


//get time format 00:00
function getTime() {
  function format(number) {
    if (number < 10){
      return "0" + number;
    } else {
      return number;
    }
  }

  const now = new Date();
  const hh = format(now.getHours());
  const mm = format(now.getMinutes());

  return `${hh}:${mm}`;
}


function setAlarmTime(){

  // all value from html are string

  var settime= document.getElementById('time').value;

  // // all Date number type
   const now = new Date();
   const day = now.getUTCDate();
   var today = day.toString();



  if(opt !== today){
    console.log("It is wrong day");
    console.log(`${opt}!!!!${today}`);


  }else{
    if ( settime === getTime()){
       vid.play();
       console.log('Wake up');
       console.log(opt);
       console.log(typeof opt);
    }else{
      console.log("It is wrong time");
      console.log(`Alarm Set${settime}!!....Time now${getTime()}`);
    }

  }
}

setAlarmbtn.addEventListener("click", () => {
  opt= document.getElementById('repeat').value;
    if(opt === '0'){
       setInterval(function () {
       vid.play();
     }, (5*1000)); //day*min*second*millisecond 24*60*60
    }else{
      setInterval(setAlarmTime, 1000);
    }

});


pausevid.addEventListener("click", () =>{
    vid.pause();
});
