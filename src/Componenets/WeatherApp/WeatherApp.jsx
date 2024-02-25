import React from 'react'
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
    return (
        <div className='container'>
            {/* Top Bar containing search input field and search icon */}
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search a city' />
                <div className='search-icon'>
                    <img src={search_icon} alt="Search Icon" />
                </div>
            </div>

            {/* div containing icon showing the current weather */}
            <div className="weather-icon">
                <img src={cloud_icon} alt="Weather Icon" />
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
