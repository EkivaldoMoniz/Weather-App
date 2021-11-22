import axios from 'axios';

const URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = 'DIGITE A SUA CHAVE AQUI';

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