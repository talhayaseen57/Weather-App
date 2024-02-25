import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'

export const WeatherApp = () => {

    let api_key = "bb153afb243bf1617b48b328cf3931e5";

    const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

    const search_func = async () => {
        const city_element = document.getElementsByClassName("cityInput");
        let city_name = city_element[0].value;

        if (city_name === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let json_data = await response.json();
        
        const current_temperature_element = document.getElementsByClassName("weather-temp");
        const location_element = document.getElementsByClassName("weather-location");
        const humidity_percentage_element = document.getElementsByClassName("humidity-percentage");
        const wind_speed_element = document.getElementsByClassName("wind-speed");

        current_temperature_element[0].innerHTML = json_data.main.temp + "°C";
        location_element[0].innerHTML = json_data.name;
        humidity_percentage_element[0].innerHTML = json_data.main.humidity + "%";
        wind_speed_element[0].innerHTML = json_data.wind.speed + " km/h";

        let weather_icon_code = json_data.weather[0].icon;
        console.log(weather_icon_code);
        console.log(typeof(weather_icon_code));

        if (weather_icon_code === "01d" || weather_icon_code === "01n") {
            setWeatherIcon(clear_icon);
        }
        else if (weather_icon_code === "02d" || weather_icon_code === "02n") {
            setWeatherIcon(cloud_icon);
        }
        else if (weather_icon_code === "03d" || weather_icon_code === "03n") {
            setWeatherIcon(drizzle_icon);
        }
        else if (weather_icon_code === "04d" || weather_icon_code === "04n") {
            console.log("Function came here!");
            setWeatherIcon(drizzle_icon);
        }
        else if (weather_icon_code === "09d" || weather_icon_code === "09n") {
            setWeatherIcon(rain_icon);
        }
        else if (weather_icon_code === "10d" || weather_icon_code === "10n") {
            setWeatherIcon(rain_icon);
        }
        else if (weather_icon_code === "13d" || weather_icon_code === "13n") {
            setWeatherIcon(snow_icon);
        }
        else {
            setWeatherIcon(clear_icon);
        }

    }

    return (
        <div className='container'>
            {/* Top Bar containing search input field and search icon */}
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search a city' />
                <div className='search-icon' onClick={() => {search_func()}}>
                    <img src={search_icon} alt="Search Icon" />
                </div>
            </div>

            {/* div containing icon showing the current weather */}
            <div className="weather-icon">
                <img src={weatherIcon} alt="Weather Icon" />
            </div>

            {/* div containing temperature */}
            <div className="weather-temp">6°C</div>

            {/* div containing location name */}
            <div className="weather-location">Budapest</div>

            {/* div containing data elements like humidity percentage and wind speed */}
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">82%</div>
                        <div className="data-text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">4.3 km/h</div>
                        <div className="data-text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
