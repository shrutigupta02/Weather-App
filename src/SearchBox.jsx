import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({updateInfo}){
    const apiURL = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6508c4d5340a8a7d788308631dd5d072";

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${apiURL}?q=${city}&appid=${apiKey}&units=metric`);
            let jsonResponse = await response.json();
            let info = {
                city: city,
                temp: jsonResponse.main.temp,
                minTemp: jsonResponse.main.temp_min,
                maxTemp: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return info;
        }catch(err){
            throw err;
        }
        
    }

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let handleChange = (event)=>{
        setCity(event.target.value);
        
    };

    let handleSubmit = async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let result = await getWeatherInfo();
            updateInfo(result);
        }catch(err){
            setError(true);
        }
    };

    return (
        <div>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city}/>
            <br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p>No such place exists</p>}
        </div>
    );
}