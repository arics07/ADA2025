/*
Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener
las siguientes propiedades: nombre, edad y un array de notas (con 5
notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto
investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
las notas.
*/

let estudiante = {
    nombre: "Paloma Gonzalez",
    edad: 24,
    notas: [9, 8, 9, 10, 6]
};

function calcularPromedio(arrayNotas){
    let suma = 0;
    for (let i=0; i<arrayNotas.length; i++){
        suma = suma + arrayNotas[i];
    }
    let promedio = suma/arrayNotas.length;
    return promedio;
};

function procesarEstudiante(student){
    
    student.notas.push(10);
    student.notas.shift();
    student.promedio = calcularPromedio(student.notas);
    student.nombre = student.nombre.toUpperCase();

    return(student);
}



/*
Pide al usuario que ingrese una oración. Luego, escribe la función
“procesarOracion” que haga lo siguiente:
1. Quite los espacios en blanco al principio y al final.
2. Divida la oración en palabras.
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar
“/a/g” que indica que se debe buscar todas las apariciones del
carácter 'a' en la cadena (la bandera g es para global, lo que
significa que reemplazará todas las apariciones, no solo la primera).
4. Encuentre la posición de la primera aparición de la palabra
"javascript". De no aparecer retornar -1
5. Convierta la oración a una cadena de palabras separadas por
guiones.
*/

const promt = require("prompt-sync")({ sigint: true });

let oracion = promt("Escriba una oración: ");

function procesarOración(oracion) {
    let oracionCortada = oracion.trim();
    let palabras = oracion.split(" ");
    let oracionArrobada = oracion.replace(/a/g, '@');
    let posicion = oracion.indexOf("javascript");
    let nuevaOracion = oracion.split(" ").join('-');
}

//procesarOración(oracion);


/*
Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función
‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico.
4. Verifique si existe un producto con precio mayor a 50. Para esto
investigar el método “.some()”
5. Devuelva una cadena de nombres de productos separados por
comas.
*/

let productos = [ {nombre:"alfajor", precio: 1000},
                  {nombre: "agua", precio: 1500},
                  {nombre: "queso", precio: 4500},
                  {nombre: "manteca", precio: 2400},
                  {nombre: "leche", precio: 1350},
                  {nombre: "miel", precio: 3800},
                  {nombre: "aceite", precio: 3900}
                ];

function gestionarProductos(listaProductos, nuevoProducto, buscoProducto){
    listaProductos.push(nuevoProducto);
    listaProductos.pop();
    let indice = listaProductos.findIndex(producto => producto.nombre === buscoProducto);
    //console.log(indice);
    //console.log(listaProductos);
    console.log(listaProductos.some( producto => producto.precio > 50));

    let nombresProductos = listaProductos.map(producto => producto.nombre);
    let cadena = nombresProductos.join(', ');
    console.log(cadena);
    return cadena;
}

//gestionarProductos(productos, "fideos", "agua");
//gestionarProductos(productos, "coca-cola", "alfajor");
//gestionarProductos(productos, "chocolate", "queso rayado");



/*
Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
“Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las
siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados
por puntos. Investigar el método “.sort()”
*/

let nombres = prompt("Ingrese los siguientes nombres separados por comas: Julian, Maria, Malena, Andrea, Pablo, Pedro");

function tranformarYAnalizarNombres(nombres) {
    
}


/*
Ejercicio 5: Manipulación de Arrays y Cadenas
A partir del siguiente array de frases, escribe la función “procesarFrases”
que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena
separada por espacios.
5. Devuelva un nuevo array con las frases modificadas.
*/




/*
Ejercicio 6: Autos y más autos…
Escribe una función "gestionarAutos" que realice las siguientes tareas con
una lista predefinida de marcas de autos:
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por
puntos. Utilizar “.sort()”
*/



/*
Ejercicio 7: “La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas
con una lista predefinida de nombres de flores:
1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue
"Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
"Girasol" al inicio de la lista.
5. Devuelva una cadena de flores en orden alfabético separadas por
puntos.
*/




/*
Gráfico: en un archivo separado :D
*/