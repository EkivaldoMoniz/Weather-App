import axios from 'axios';

const URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = '7e2807a1859ec55f3c198b41873794e7';

export const fetchWeather = async (query) => {
    
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY,
                lang:'pt_br',
            }
        });        
        return data;

}