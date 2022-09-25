import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  console.log('hah', sw, ne);
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    console.log('data', data)
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getWeatherData = async (lat, lon) => {
  const key = process.env.REACT_APP_WEATHER_API;
  try {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
    console.log('data', data.data)
    return data.data;
  } catch (error) {
    console.log(error);
  }
}