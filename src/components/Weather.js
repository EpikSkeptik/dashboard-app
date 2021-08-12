import { useEffect, useState } from 'react'

const Weather = () => {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                console.log(result);
            });
        }
        fetchData();
    }, [lat,long]);
    return (
        <div className='weather-container'>
            <h1 className='weather-title'>Weather Forecast</h1>
            <h2 className="temp">{data.main.temp} &deg;C</h2>
            <h2 className="description">{data.weather[0].main}</h2>
            <h3 className="city">{data.name}</h3>
            
        </div>
    )
}

export default Weather
