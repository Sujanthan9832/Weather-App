import './weather.css';
import cloud from '../../assets/img/cloud.png';
import cloudy from '../../assets/img/cloudy.png';
import heavyrain from '../../assets/img/heavyrain.png';
import rain from '../../assets/img/rain.png';
import sun from '../../assets/img/sun.png';
import wind from '../../assets/img/wind.png';
import search from '../../assets/img/search.png';
import humidity from '../../assets/img/humidity.png';
import thunderstorm from '../../assets/img/thunderstorm.png';
import { useState } from 'react';


const Weather = () => {
    let api_key = 'f791d66e3a7475d83516433b70922fd4';

    const [wicon, setWicon] = useState(cloud);

    const searchWeather = async () => {
        const element = document.getElementsByClassName("search");
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidityValue = document.getElementsByClassName("humitity_percent");
        const wind = document.getElementsByClassName("wind_speed");
        const temprature = document.getElementsByClassName("weather_tem");
        const location = document.getElementsByClassName("weather_location");

        humidityValue[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temprature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
            setWicon(sun);
        }
        else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
            setWicon(cloudy);
        }
        else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
            setWicon(cloud);
        }
        else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
            setWicon(rain);
        }
        else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
            setWicon(heavyrain);
        }
        else if (data.weather[0].icon === '11d' || data.weather[0].icon === '11n') {
            setWicon(thunderstorm);
        }
        else {
            setWicon(cloudy);
        }
    }
    return (
        <div className="main_box">
            <div className='container'>
                <div className='top_bar'>
                    <input type='text' className='search' placeholder='search'></input>
                    <div className='search-icon' onClick={() => { searchWeather() }}>
                        <img src={search} alt="" className='searchIcon' />
                    </div>
                </div>
                <div className="weather_img">
                    <img src={wicon} alt="weather" />
                </div>
                <div className="weather_tem">24°C</div>
                <div className="weather_location">Badulla</div>
                <div className="data_container">
                    <div className="element">
                        <img src={humidity} alt="humitity icon goes here" className="humitity_icon" />
                        <div className='data'>
                            <div className="humitity_percent">64%</div>
                            <div className="text">Humitity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={wind} alt="wind icon goes here" className="wind_icon" />
                        <div className="data">
                            <div className="wind_speed">18km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather