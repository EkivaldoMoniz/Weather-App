import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = async (e) => {   
        if (e.key === 'Enter') {

            try{
                const data = await fetchWeather(query);
                setWeather(data);
                setQuery('');  
            }
            catch (error){
                alert("Cidade não localizada!");
            }
                           
        }            
    }

    return (
        <div className="main-container">
            <input type="text" className="search" placeholder="Cidade" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="temperature-container">
                        
                        <div className="center">
                            <div className="main-temp" >
                                <div className="min-max-temp">
                                    {Math.round(weather.main.temp_min)}
                                    <sup>&deg;C</sup>
                                </div>
                                <div className="city-temp">
                                    {Math.round(weather.main.temp)}
                                    <sup>&deg;C</sup>
                                </div>
                                <div className="min-max-temp">
                                {Math.round(weather.main.temp_max)}
                                <sup>&deg;C</sup>  
                                </div>
                            </div>
                            <div className="info">
                                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                                <p>{weather.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="extra-info">
                    
                        <span>Humidade:  {weather.main.humidity} <sup>&deg;C</sup></span>
                        <span>Nascer do sol: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</span>
                        <span>Pôr do sol: {new Date (weather.sys.sunset * 1000).toLocaleTimeString()} </span>
                    </div>
                </div>
            )
            }

        </div >
    );


}

export default App;


