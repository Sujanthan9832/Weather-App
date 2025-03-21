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
    const [searchTerm, setSearchTerm] = useState("");


    const searchWeather = async () => {
        if (!searchTerm) {
            alert("Please enter a city name!");
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=Metric&appid=${api_key}`;

        try {
            let response = await fetch(url);
            let data = await response.json();

            if (response.status === 404) {
                alert("City not found! Please enter a valid city name.");
                return;
            }

            document.querySelector(".humitity_percent").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind_speed").innerHTML = data.wind.speed + "km/h";
            document.querySelector(".weather_tem").innerHTML = data.main.temp + "°C";
            document.querySelector(".weather_location").innerHTML = data.name;

            if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') setWicon(sun);
            else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') setWicon(cloudy);
            else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') setWicon(cloud);
            else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') setWicon(rain);
            else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') setWicon(heavyrain);
            else if (data.weather[0].icon === '11d' || data.weather[0].icon === '11n') setWicon(thunderstorm);
            else setWicon(cloudy);

        } catch (error) {
            alert("Something went wrong! Please try again later.");
            console.error("Error fetching weather data:", error);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        searchWeather();
    };

    return (
        <div className='container'>
            <div className='top_bar'>
                <form className='top_bar' onSubmit={handleSubmit} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
                    <input type='text' className='search' placeholder='search'></input>
                    <div className='search-icon' onClick={() => { searchWeather() }}>
                        <img src={search} alt="" className='searchIcon' />
                    </div>
                </form>
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
    )
}

export default Weather