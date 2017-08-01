function AlarmClock(time) {
  this.time = time;
}

AlarmClock.prototype.isAlarmTime = function(time) {
  var currentTime = moment();
  if (currentTime === time) {
    return true;
  };
};
