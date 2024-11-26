// Importo el módulo fs
var fs = require('fs');

datos = "Voy a escribir cosas en un archivo y este es un ejemplo.";

fs.writeFile('archivo.txt', datos, function(err){
    if (!err){
        console.log('Los datos han sido escritos en el archivo archivo.txt')
    } else {
        throw err;
    }
});