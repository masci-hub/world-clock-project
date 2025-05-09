function displayTime() {
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    let rome = moment().tz("Europe/Rome");

    romeDateElement.innerHTML = rome.format("MMMM Do YYYY");
    romeTimeElement.innerHTML = rome.format("h:mm:ss [<small>]A[</small>]");
  }
}

displayTime();
setInterval(displayTime, 1000);

function changeCity(event) {
  let timeZone = event.target.value;
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
        </div>`;
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", changeCity);
