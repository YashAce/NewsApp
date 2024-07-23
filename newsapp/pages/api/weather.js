/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file handles weather api.
**/

import axios from 'axios';

export default async function handler(req, res) {
    const { city } = req.query;
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

    try {
        console.log("weather Req", city)

        const geoResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},IN&limit=1&appid=${apiKey}`);
        const { lat, lon } = geoResponse.data[0];
        console.log("weather Req", lat, lon)


        // // Fetch the weather data using the latitude and longitude
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        console.log("weather", weatherResponse.data.city.id)
        res.status(200).json(weatherResponse.data.city.id);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("error", error)
    }
}
