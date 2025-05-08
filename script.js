function updateTime() {
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let rome = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = rome.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = rome.format("h:mm:ss [<small>]A[</small>]");

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYork = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYork.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYork.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
