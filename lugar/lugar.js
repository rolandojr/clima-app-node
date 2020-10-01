const axios = require("axios");

const getLugarLatLng = async (direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp =await axios.get(`http://open.mapquestapi.com/geocoding/v1/address?key=ZzGVLvlJdrsSkVVc8hAviaCTAnHsoJyh&location=${encodedUrl}`)
    if (resp.data.results[0].locations.length === 1) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }
    let localizacion = resp.data.results[0];
    let coors = localizacion.locations[0].latLng;

    return {
        direccion,
        lat:coors.lat,
        lng:coors.lng
    }
}


module.exports = {
    getLugarLatLng
}

