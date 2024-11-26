//Importo el módulo fs
var fs = require('fs');

fs.readFile('archivo.txt', 'utf-8', function(err, data){
    if (!err){
        console.log(data);
    } else {
        throw err;
    }
});