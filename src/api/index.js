import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  console.log('hah', sw, ne);
  try {
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        // bl_latitude: '11.847676',
        // tr_latitude: '12.838442',
        // bl_longitude: '109.095887',
        // tr_longitude: '109.149359',
      },
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
      }
    });
    console.log('data', data)
    return data;
  } catch (error) {
    console.log(error);
  }
}