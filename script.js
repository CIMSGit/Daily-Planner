let currentDate =$("#currentDay");
let currentMoment =$("<p>");
currentMoment.text((moment().format("dddd, MMMM Do YYYY")));
currentDate.append(currentMoment)