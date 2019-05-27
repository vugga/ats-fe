var secondsLeft = "";
var minutesLeft = "";
var hoursLeft = "";
var previousTickData = { h: "", m: "", s: "" };

// Getting a reference to the html elements
var elSecondsTens = document.getElementById("secondsTens");
var elSecondsSingles = document.getElementById("secondsSingles");
var elMinutesTens = document.getElementById("minutesTens");
var elMinutesSingles = document.getElementById("minutesSingles");
var elHoursTens = document.getElementById("hoursTens");
var elHoursSingles = document.getElementById("hoursSingles");

// HACK: please delete
var time = 300 * 10 * 48;

var tick = function(flipAll) {
  time -= 1;
  if (time < 0) time = 0;
  secondsLeft = time % 60;
  minutesLeft = Math.floor(time / 60) % 60;
  hoursLeft = Math.floor(time / 3600);

  var s = secondsLeft.toString().paddTo(2);
  var m = minutesLeft.toString().paddTo(2);
  var h = hoursLeft.toString().paddTo(2);
  var os = previousTickData.s.toString().paddTo(2);
  var om = previousTickData.m.toString().paddTo(2);
  var oh = previousTickData.h.toString().paddTo(2);

  flipCount(elSecondsSingles, s[1]);

  if (flipAll || os[0] != s[0]) flipCount(elSecondsTens, s[0]);

  if (flipAll || om[0] != m[0]) flipCount(elMinutesTens, m[0]);
  if (flipAll || om[1] != m[1]) flipCount(elMinutesSingles, m[1]);

  if (flipAll || oh[0] != h[0]) flipCount(elHoursTens, h[0]);
  if (flipAll || oh[1] != h[1]) flipCount(elHoursSingles, h[1]);

  previousTickData.s = secondsLeft;
  previousTickData.m = minutesLeft;
  previousTickData.h = hoursLeft;
};

var interval = setInterval(function() {
  tick();
}, 1000);

setTimeout(function() {
  tick(true);
}, 1);

function flipCount(container, newContent) {
  var inner = container.querySelectorAll(".count-down-content");
  var containerText = container.querySelectorAll(".container-text");
  container.classList.add("animating");
  containerText[0].innerHTML = newContent;

  setTimeout(function() {
    inner[0].querySelector("span").innerHTML = newContent;
    inner[1].querySelector("span").innerHTML = newContent;
  }, 250);

  setTimeout(function() {
    containerText[1].innerHTML = newContent;
    container.classList.remove("animating");
  }, 750);
}

function paddTo(val, length) {
  val = "" + val;
  while (val.length < length) val = "0" + val;
  return val;
}

String.prototype.paddTo = function(length) {
  return paddTo(this, length);
};
