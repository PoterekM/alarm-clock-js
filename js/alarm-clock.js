function AlarmClock(time) {
  this.time = time;
}

AlarmClock.prototype.isAlarmTime = function(time) {
  var currentTime = moment().minute();
  if (currentTime === this.time) {
    return true;
  } else {
    return false;
  }
};

exports.alarmClockModule = AlarmClock;
