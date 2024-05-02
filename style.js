let cityValue = document.getElementById('cityName') 
let getbtn = document.getElementById('getbtn')
let displayCity = document.getElementById('heading')
let temprature = document.getElementById('temprature')
let stateName = document.getElementById('stateName')
let windspeed = document.getElementById('windspeed')
let humidity = document.getElementById('humidity')
let feelslike = document.getElementById('feelslike')

let cityname = ''
getbtn.addEventListener('click', () => {
    cityname = cityValue.value;
    gettingLocation();
})

let mylocation = {}
                  
async function gettingLocation() {
    const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=d12b69a810757d9796831f36bc74c9d2`);
    mylocation = await location.json()
    console.log(mylocation )
    getttingWeather()
}

async function getttingWeather() {
    let lon = mylocation[0].lon;
    let lat = mylocation[0].lat;
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d12b69a810757d9796831f36bc74c9d2`);
    console.log(weather);
    const result = await weather.json();
    temprature.innerText = `${Math.floor(result.main.temp - 273.15)} °C`;
    displayCity.innerText = mylocation[0].name
    stateName.innerText = mylocation[0].state
    windspeed.innerText =  `Windspeed: ${result.wind.speed} mph`
    humidity.innerText = `Humidity: ${result.main.humidity}`
    feelslike.innerText = `feelslike: ${Math.floor(result.main.feels_like - 273.15)} °C`

    console.log(result )
}