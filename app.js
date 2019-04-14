//Designed and Developed
//    by Soravath March 2019

// Variable declearation
var setAlarmbtn = document.getElementById('setAlarm');
var vid = document.getElementById('myVideo');
var opt = "";
var sndAlarm = "";

function playAlarmSound(setSound){
  switch (setSound) {
    case 'bomb':
        new Audio('audios/BOMB_SIREN.mp3').play();
      break;
      case 'buzzer':
        new Audio('audios/Loud_Alarm_Clock_Buzzer.mp3').play();
        break;
      case 'rooster':
        new Audio('audios/Rooster Crowing.mp3').play();
        break;
      case 'tornado':
        new Audio('audios/Tornado_Siren.mp3').play();
        break;
    default:

  }
}

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

//// Variable declearation
// setting is string
  var settime= document.getElementById('time').value;

  // all Date number type
   const now = new Date();
   const day = now.getUTCDay();
   var today = day.toString();

  if(opt !== today){
    console.log("It is wrong day");
    console.log(`${opt}!!!!${today}`);
  }else{
    if ( settime === getTime()){
       playAlarmSound(sndAlarm);
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
  sndAlarm = document.getElementById('audio').value;
  console.log(sndAlarm);
  console.log(typeof sndAlarm);
    if(opt === 'rep'){
        setInterval(function () {
        playAlarmSound(sndAlarm);
     }, (24*60*60*1000)); //day*min*second*millisecond 24*60*60*1000
    }else{
      setInterval(setAlarmTime, 10*1000);
    }
});
