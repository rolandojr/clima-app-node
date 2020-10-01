const axios = require("axios");
const getTemperatura = async(lat,lng) => {
    let resp  = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a4a25e00740650966068aa901691abfd`);
    if (resp.data.cod === "400") {
    throw new Error(`No se pudo encontrar la temperatura del lugar`);    
    }
    let temperatura = resp.data.main.temp;
    return temperatura;
}
module.exports = {
    getTemperatura
}