const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo= async(direccion) => {
    try {
        let coordenadas =await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getTemperatura(coordenadas.lat,coordenadas.lng);
        return `La temperatura en ${direccion} es ${temperatura}`;
    } catch (error) {
        return `No se ha determinado la tempratura para la direccion de ${direccion} `;
    }

}
getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e))