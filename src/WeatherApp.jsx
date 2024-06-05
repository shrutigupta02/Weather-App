import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({});

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }

    return(
        <>
        <SearchBox updateInfo={updateInfo}/>
        {Object.keys(weatherInfo).length > 0 && <InfoBox info={weatherInfo} />}
        </>
    )
}