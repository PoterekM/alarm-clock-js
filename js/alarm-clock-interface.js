var AlarmClock = require('./../js/alarm-clock.js').alarmClockModule;
$(document).ready(function() {
  $('#current-time').text(moment());
  $('#time-form').submit(function(event) {
    event.preventDefault();
    var time = $('#time').val();
    var newAlarmClock = new AlarmClock(time);
    var alarmTime = newAlarmClock.isAlarmTime(time);
    var output = setInterval(alarmTime, 1000);
    // var output = new AlarmClock.isAlarmTime(time);
    if (output) {
      $('#alarm').show();
    }
  });
});
