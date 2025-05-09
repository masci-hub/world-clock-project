function displayTime() {
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    let romeTimeZone = moment().tz("Europe/Rome");

    romeDateElement.innerHTML = romeTimeZone.format("MMMM Do YYYY");
    romeTimeElement.innerHTML = romeTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTimeZone = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTimeZone.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTimeZone = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTimeZone.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

displayTime();
setInterval(displayTime, 1000);

function changeCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let city = timeZone.replace("_", " ").split("/")[1];
  let time = moment().tz(timeZone).format("h:mm:ss [<small>]A[</small>]");
  let date = moment().tz(timeZone).format("MMMM Do YYYY");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `<div class="city">
          <div>
            <h2>${city}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}</div>
        </div>
        <a href="https://world-clock-project-tqng.onrender.com/">Reset</a>`;
  setTimeout(() => {
    changeCity(event);
  }, 1000);
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", changeCity);
