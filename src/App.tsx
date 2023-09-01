// App.tsx

import React, { useState, useEffect } from 'react';

function App() {
    const [city, setCity] = useState<string>(''); // Состояние для хранения названия города
    const [weatherData, setWeatherData] = useState<any | null>(null); // Состояние для хранения данных о погоде

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    const fetchWeatherData = async () => {
        try {
            const response = await fetch('https://localhost:7069/api/WeatherForecast', {
                headers: {
                    Accept: 'application/json',
                },
            });
            console.log(response);

            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                console.error('Error fetching weather data');
            }
        } catch (error) {
            console.error('Error fetching weather data', error);
        }
    };

    useEffect(() => {
        if (city) {
            fetchWeatherData();
        }
    }, [city]);

    return (
        <div>
            <h1>My Weather App</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleCityChange}
                />
                <button onClick={fetchWeatherData}>Get Weather</button>
            </div>
            {weatherData && (
                <div>
                    <h2>Weather Information</h2>
                    <p>Date: {weatherData[0].date}</p>
                    <p>Temperature: {weatherData[0].temperatureC}°C</p>
                    <p>Summary: {weatherData[0].summary}</p>
                </div>
            )}
        </div>
    );
}

export default App;
