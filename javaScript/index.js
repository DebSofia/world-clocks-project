const TIME_FORMAT = "h:mm:ss A";
const DATE_FORMAT = "dddd, DD MMM YYYY";
const DEFAULT_TIMEZONE = moment.tz.guess();

let cityNameElement = document.querySelector("#city-name");
let dateElement = document.querySelector("#date");
let timeElement = document.querySelector("#time");
let timeZone = DEFAULT_TIMEZONE;

dateElement.innerHTML = moment().format(DATE_FORMAT);
timeElement.innerHTML = moment.tz(DEFAULT_TIMEZONE).format(TIME_FORMAT);

changeCityAndDateTime(timeZone);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  changeCityAndDateTime(cityTimeZone);

  timeZone = cityTimeZone;
}

function changeCityAndDateTime(cityTimeZone) {
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  cityNameElement.innerHTML = cityName;
  dateElement.innerHTML = cityTime.format(DATE_FORMAT);
  timeElement.innerHTML = cityTime.format(TIME_FORMAT);
}

function updateTime(params) {
  timeElement.innerHTML = moment.tz(timeZone).format(TIME_FORMAT);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
