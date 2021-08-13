import { useEffect, useState} from 'react'

const Weather = () => {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    

     useEffect(() => {

        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                const d = res.json() 
                console.log(d)})
            .then(result => {
                if (result.cod === 200) {
                    setData(result);
                    setLoading(false);
                }
                console.log(result);
            })
            .catch ((err) => console.log(err));
        }
            fetchData();

        
    }, [lat,long,loading]);

    return (
        <div className='weather-container'>
            <h1 className='weather-title'>Weather Forecast</h1>
            {loading ? <h2>Loading...</h2> : <h2 className="temp">{data.main['temp']} &deg;C</h2>}
            {loading ? <h2>Loading...</h2> : <h2 className="description">{data.weather[0].main}</h2>}
            {loading ? <h2>Loading...</h2> : <h3 className="city">{data.name}</h3>}
            
        </div>
    )
}

export default Weather
