var date = new Date();
document.getElementById("_date").innerText = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}` ;
const days = new Array("Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday" , "Friday", "Saturday")
document.getElementById("_day").innerText = days[date.getDay()];

const getLocation = new XMLHttpRequest();
const getWeather = new XMLHttpRequest();
const getHourlyWeather = new XMLHttpRequest();
const getCity = document.querySelector("#_search")
const startSearch = document.querySelector("#_select")
const api = "b1fff92eae60960ea3d9e6a91b4df1cf";
const pic = document.getElementById("_wICO");
const Temp = document.getElementById("_temp");
const City = document.getElementById("_city");
const MinT = document.getElementById("_min");
const MaxT = document.getElementById("_max");
const Wind = document.getElementById("_wind");

startSearch.addEventListener("onclick", loc);


function loc()
{
    getLocation.open("GET", `https://api.openweathermap.org/geo/1.0/direct?q=${getCity.value}&limit=5&appid=${api}`);
    getLocation.responseType = "json";
    getLocation.send();
    getLocation.onload = function ()
    {
        var location = getLocation.response;
        City.innerText = location[0]["name"];
        console.dir(location);
        var lat = location[0]["lat"];
        var lon = location[0]['lon'];
        gatheringWeather(lat,lon);
        gatheringHourlyWeather(lat,lon)
    }

}

function gatheringWeather (lat,lon)
{
    getWeather.open("GET",`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api}`)
    getWeather.responseType = "json";
    getWeather.send();
    getWeather.onload = function (){
        var _weather = getWeather.response;
        console.dir(_weather);
        pic.src = `http://openweathermap.org/img/wn/${_weather.weather[0]["icon"]}@2x.png`;
        Temp.innerText = parseInt(_weather.main["temp"]) + "°C";
        document.getElementById("_state").innerText = _weather.weather[0]["description"];
        MaxT.innerText = parseInt(_weather.main["temp_max"])  + "°C" ;
        MinT.innerText = parseInt(_weather.main["temp_min"]) + "°C";
        Wind.innerText = parseInt(_weather.wind["speed"]) + " km/h"
    }

}

function gatheringHourlyWeather(lat,lon)
{
   getHourlyWeather.open("GET", `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api}`);
   getHourlyWeather.responseType = "json";
   getHourlyWeather.send();
   getHourlyWeather.onload = function (){
       var _hourlyw = getHourlyWeather.response;
       console.dir(_hourlyw);
       applyForecast(_hourlyw);


   }
}

function applyForecast(hourlyWeatherReport)
{
    var pics = document.getElementsByName("pic");
    var states = document.getElementsByName("state");
    var temps = document.getElementsByName("temperature");
    var winds = document.getElementsByName("wind");
    var i=0;
    pics.forEach(element=>element.src = `http://openweathermap.org/img/wn/${hourlyWeatherReport.list[i++].weather[0]["icon"]}@2x.png`);
    states.forEach(function (element, i , states)
    {
        element.innerText = hourlyWeatherReport.list[i].weather[0]["description"];
    })
    temps.forEach(function (element,i,temps){
        element.innerText = parseInt(hourlyWeatherReport.list[i].main["temp"]) + "°C" ;
    })
    winds.forEach(function (element,i,winds){
        element.innerText = parseInt(hourlyWeatherReport.list[i].wind["speed"]) + "km/h";
    })
}