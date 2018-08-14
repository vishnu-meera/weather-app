import axios from 'axios';
const API_KEY = '9bc244f48f6078503c8c30082fa914f1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`

    const request = axios.get(url);
    console.log("request promise , ", request)
    return {
        type:FETCH_WEATHER,
        payload:request
    };
}