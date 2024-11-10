//Consulta de una API tipo REST en el lado del servidor, por medio del paquete Axios

let EuroRate = 0; // Variable para almacenar la tasa

// Petición API para obtener la tasa de EUR/USD

const axios = require('axios');
const getCharacters = () => {
    axios.get('https://api.frankfurter.app/latest?base=USD')
    .then(response => {
        EuroRate = response.data.rates.EUR;
        console.log(`El valor del EUR hoy es: ${EuroRate}`);
    })
    .catch(error => console.log("mostrando error", error));
}

// Llamada a la API al cargar la página
getCharacters();