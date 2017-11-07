var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var today = new Date();
var currentDay = today.getDay();
var weekDay = today.getDate();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var tit = document.getElementById("titles");
var prev = document.getElementById("previous");
var foll = document.getElementById("following");
var r0 = document.getElementById("row0");
var foot = document.getElementById("currentDate");
var monthCal = currentMonth;
var yearCal = currentYear;

foot.innerHTML += theWeek[currentDay] + ", " + weekDay + " of " + months[currentMonth] + " of " + currentYear;



window.onload = function () {
  header();
  firstLine();
  printDays();


}

function header() {
  var preMonth = monthCal - 1;
  var follMonth = monthCal + 1;

  tit.innerHTML = months[monthCal] + " of " + yearCal;

  if (preMonth < 0) {
    preMonth = 11;
  }
  if (follMonth > 11) {
    follMonth = 0;
  }

  prev.innerHTML = months[preMonth];
  foll.innerHTML = months[follMonth];

}

function firstLine() {
  for (i = 0; i < 7; i++) {
    cell0 = r0.getElementsByTagName("th")[i];
    cell0.innerHTML = dayOfWeek[i];
  }
}

function printDays() {
  //to find day of the week from the first day of the month

  var firstDayMonth = new Date(yearCal, monthCal, "1");
  var firsOfWeek = firstDayMonth.getDay();
  var dayFirst = firstDayMonth.getDate();
  var firstCell = dayFirst - firsOfWeek;
  var start = firstDayMonth.setDate(firstCell);
  var dayMonth = new Date();
  dayMonth.setTime(start);
  for (i = 1; i < 7; i++) {
    row = document.getElementById("row" + i);
    for (j = 0; j < 7; j++) {
      myDay = dayMonth.getDate();
      myMonth = dayMonth.getMonth();
      myYear = dayMonth.getFullYear();
      cell = row.getElementsByTagName("td")[j];
      cell.innerHTML = myDay;
      myDay = myDay + 1;
      dayMonth.setDate(myDay);

      cell.style.backgroundColor = "white";
      cell.style.color = "#492736";

      if (j == 6|| j == 0) {
        cell.style.color = "#f11445";
      }

      if (myMonth != monthCal) {
        cell.style.color = "#a0babc";
      }
    }
  }
}


function previousMonth() {
  var newMonth = new Date();
  var firstDayMonth = new Date(yearCal, monthCal, "1");
  firstDayMonth--;
  newMonth.setTime(firstDayMonth);
  monthCal = newMonth.getMonth();
  yearCal = newMonth.getFullYear();
  header();
  printDays();

}

function followingMonth() {
  var newMonth = new Date();
  var firstDayMonth = new Date(yearCal, monthCal, "1");
  timeUnix = firstDayMonth.getTime();
  timeUnix = timeUnix + (45 * 24 * 60 * 60 * 1000);
  newMonth.setTime(timeUnix);
  monthCal = newMonth.getMonth();
  yearCal = newMonth.getFullYear();
  header();
  printDays();

}

function update() {
  monthCal = today.getMonth();
  yearCal = today.getFullYear();
  header();
  printDays();
}

function findAdate() {
  myYear = document.search.searchMonth.value;
  monthList = document.search.searchMonth;
  options = monthList.options;
  num = monthList.selectedIndex;
  myMonth = options[num].value;

  if (isNaN(myYear) || myYear < 1) {
    alert("invalid year");
  } else {
    myDate = new Date();
    myDate.setMonth(myMonth);
    myDate.setFullYear(myYear);
    monthCal = myDate.getMonth();
    yearCal = myDate.getFullYear();
    header();
    printDays();
  }
}
