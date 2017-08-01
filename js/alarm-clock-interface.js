var AlarmClock = require('./../js/alarm-clock.js').alarmClockModule;
$(document).ready(function() {
  console.log("one boop");
  $('#current-time').text(moment());
  $('#time-form').submit(function(event) {
    event.preventDefault();
    var time = $('#time').val();
    console.log(time);
    console.log("boop");
    var newAlarmClock = new AlarmClock(time);
    var output = newAlarmClock.isAlarmTime(time);
    if (output) {
      $('#alarm').show();
    }
  });
});
