const http = require ("http")
function requestController () {
    //Logica de nuestra esta funcion
    console.log ("Recibimos una nueva request")

}
// Configuracion del servidor
const server =  http.createServer(requestController)
server.listen(4000)