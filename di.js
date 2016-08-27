
var http = require("http");
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    
    //Retorna data
    var mostraHora = function(dt){
        this.dt = dt;

        this.hora = function(){
            return this.dt.getHours()+":"+(this.dt.getMinutes()<10?"0"+this.dt.getMinutes():this.dt.getMinutes());
        }
    }



    var d = new Date();
    var mD = new mostraHora(d);
    response.end('Hora atual: '+mD.hora());


}).listen(8081);
console.log("Servidor rodando...");


