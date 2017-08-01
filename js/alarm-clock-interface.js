var AlarmClock = require('./../js/alarm-clock.js').alarmClockModule;

$(document).ready(function() {
  $('time-form').submit(function(event) {
    event.preventDefault();
    var time = $('#time').val();
    var newAlarmClock = new AlarmClock(time);
    // var output = newAlarmClock.isAlarmTime(time);
    $('#alarm').show();
  })
})
