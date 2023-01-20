let currentDate = $("#currentDay");
let currentMoment = $("<p>");
currentMoment.text((moment().format("dddd, MMMM Do YYYY")));
currentDate.append(currentMoment)

let textArea = $(".col");
let tasks = $("<TEXTAREA>");
tasks.text("");
textArea.append(tasks);



