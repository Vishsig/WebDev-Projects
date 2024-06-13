const input = document.getElementById("input");
const srchBtn = document.getElementById("srch-btn");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const weatherIcon = document.getElementById("weather-icon");
const weatherBox = document.getElementById("weather");

// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const apiKey = "270f5c06e5530d7cb5c4d58db07d06cd";

async function getData(inputValue){

    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputValue}&appid=270f5c06e5530d7cb5c4d58db07d06cd`);
    return weather.json();
    
}

srchBtn.addEventListener('click', async () =>{
    const inputValue = input.value;
    const result = await getData(inputValue);
    if(!inputValue){
        document.getElementById('error').style.display = 'block';
        weatherBox.style.display = 'none';
        weatherBox.style.visibility = 'hidden';
    } else {
        tempreature = Math.floor(result.main.temp)
        temp.innerHTML = tempreature + "°c";
        city.innerHTML = result.name;
        document.getElementById('humidity').innerHTML = result.main.humidity + "%";
        document.getElementById('wind-speed').innerHTML = result.wind.speed + "km/h";
        document.getElementById('state').innerHTML = result.weather[0].main;
    
        
        if(result.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        } else if(result.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        } else if(result.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        } else if(result.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        } else if(result.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        } else if(result.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        } 
        weatherBox.style.display = 'block';
        weatherBox.style.visibility = 'visible';
        document.getElementById('error').style.display = 'none';
    }
});