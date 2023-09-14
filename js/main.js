/**
 *За допомогою ajax-запиту вивести погоду

http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

q=XXX - місто, для якого показати погоду
temp – температура
pressure - тиск
description – опис
humidity – вологість 
speed – швидкість вітру
deg - напрям у градусах
icon - значок, де 10d код іконки
http://openweathermap.org/img/w/10d.png
 */

const form = document.getElementById('form');
const input = document.getElementById('city-name');
const out = document.getElementById('out');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let cityName = input.value;
  getWeather(cityName);
});

function getWeather(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c5af3f94362a89a66c25afc9142a2dd1
    `
  )
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error(response.statusText));
      } else {
        return Promise.resolve(response);
      }
    })
    .then((response) => response.json())
    .then((data) => renderWeather(data))
    .catch((error) => {
      console.log('error', error);
    });
}

function renderWeather(data) {
  console.log(data);
  out.innerHTML = `
        <div class="main">
          <h3>${data.name}</h3>
          <p>${Math.floor(data.main.temp - 273)} &deg;</p>
          <img src="https://openweathermap.org/img/wn/${
            data.weather[0]['icon']
          }@2x.png">
          <p>${data.weather[0]['description']}</p>
        </div>
        <ul>
          <li>Pressure: ${data.main.pressure} Pa</li>
          <li>Humidity: ${data.main.humidity} %</li>
          <li>Speed: ${data.wind.speed} m/s</li>
          <li>Deg: ${data.wind.deg} &deg;</li>
        </ul>
  `;
  return out;
}
