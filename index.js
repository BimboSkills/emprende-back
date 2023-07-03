require('dotenv').config()
const http = require ("http")
function requestController (req, res) {
    h

    //Logica de nuestra esta funcion
    console.log ("Recibimos una nueva request")

}
// Configuracion del segit push -u origin mainrvidor
const server =  http.createServer(requestController)
const PORT = process.env.PORT

server.listen(PORT, function (){
    console.log ("Aplicacion corriendo en el puerto: " + PORT")
})
    