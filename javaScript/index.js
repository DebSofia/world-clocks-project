let cityNameElement = document.querySelector("#city-name");
let dateElement = document.querySelector("#date");
let timeElement = document.querySelector("#time");

dateElement.innerHTML = moment().format("dddd, DD MMM YYYY");
timeElement.innerHTML = moment.tz("Europe/Lisbon").format("h:mm A");
