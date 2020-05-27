document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("demoCalendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid"],
    themeSystem: "bootatrap",
  });

  calendar.render();
});
