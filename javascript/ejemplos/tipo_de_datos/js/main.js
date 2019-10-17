/* Ejemplos: Tipo de Datos y Declaracion de variables */

console.log("------------- ejemplo 1: Declaración de variables --------------");

var mensaje = "este mensaje está almacenado en una variable eclarada con var";
const mensajeConstante = "este mensaje no se puede cambiar, variable declada con const";

if(3 < 5){
    let mensajeLet = "esta variable sólo puede usarse en la estructura que fue definida, variable declarada con let";
    console.log(mensajeLet);
}

console.log("------------- ejemplo 2: Tipo de datos Number, String y Boolean --------------");

var verdaderoOFalso = true; // variable tipo booleana true o false
var tipoNumeroEntero = 25; // variable tipo number entero
var tipoNumeroDecimal = 25.50; // variable tipo number decimal
var tipoCadenaCaracteres = "Hola Mundo"; // variable tipo string


if (verdaderoOFalso)
{
    console.log("variable booleana :" + verdaderoOFalso);
}

console.log("variable tipo entero :" + tipoNumeroEntero);
console.log("variable tipo decimal :" + tipoNumeroDecimal);
console.log("variable tipo string :" + tipoCadenaCaracteres);



console.log("------------- ejemplo 3: Tipo de datos Object --------------");


var usuario = {
    nombre: "juan", // defino propiedades al objeto
    apellido: "lopez",
    edad:30,
    activo:true,
    saludar: function(){
        console.log("hola!!!!, esto es una invocacion de una funcion asignada a una propiedad de un objeto"); // un objeto puede tener propiedades del tipo Function
    }
};

console.log("variable tipo object: ", usuario);

// uso de las propiedades del objeto
var nombreCompleto = usuario.nombre + usuario.apellido;
console.log(" el nombre completo es " + nombreCompleto + " y la edad es "+ usuario.edad);

usuario.saludar();

console.log("------------- ejemplo 4: Tipo de datos Object, accediendo a los elementos --------------");

//accedo a la propiedad por el nombre
console.log("accedo al valor de la propiedad por el nombre: "+ usuario.activo );

//accedo a la propiedad por el nombre
var propiedadPorNombre = usuario["edad"];
console.log("accedo al valor de la propiedad por el nombre: "+ propiedadPorNombre );

// como recorrer las propiedades de un objeto
// se utiliza for in
console.log("--- for in ---");
for(propiedad in usuario)
{
    console.log("propiedad del objeto:"+ propiedad);
    if(propiedad == "nombre")
    {
        console.log("accedo al valor de la propiedad: "+usuario[propiedad] );
    }
}


console.log("------------- ejemplo 5: Tipo de datos Array --------------");

var tipoArrayVacio = []; // declaro un array vacio
var tipoArrayConElementos = [1,2,3,4,"nico",false,true]; // declaro un array con elementos

// declaro un array con elementos tipo Array
var tipoArrayConSubArrays = [["perro","gato","pez"],[1,2,3,4,5,6]];

// declaro un array con elementos tipo Object
var tipoArrayConElementosObject = [
    {nombre:"batman", edad:40},
    {nombre:"mujer maravilla", edad:35},
    {nombre:"superman", edad:30},
    {nombre:"chapulin colorado", edad:60}
];

console.log("array vacio:",tipoArrayVacio);
console.log("array con elementos:",tipoArrayConElementos);
console.log("array con sub arrays:",tipoArrayConSubArrays);
console.log("array con elementos tipo object", tipoArrayConElementosObject);


console.log("------------- ejemplo 6: Tipo de datos Array, accediendo a los elementos --------------");

// accedo al elemento por el índice
var elemento = tipoArrayConElementos[1];
console.log("accedo al valor del elemento por el indice: "+ elemento );

elemento = tipoArrayConSubArrays[0];
console.log("accedo al valor del elemento por el indice: ", elemento );

elemento = tipoArrayConElementosObject[0];
console.log("accedo al valor del elemento por el indice: ", elemento );


// como recorrer un array
// se utiliza for of
console.log("--- for of ---");
for(elemento of tipoArrayConElementos)
{
 console.log(elemento)  
}
console.log("--- fin for of ---");



console.log("--- for of ---");
for(elemento of tipoArrayConElementosObject)
{
 console.log(elemento)  
}
console.log("--- fin for of ---");

console.log("--- for of ---");
for(elemento of tipoArrayConSubArrays)
{
    if( Array.isArray(elemento) ){
        for (subElemento of elemento) {
            console.log(subElemento);
        }
    }
}
console.log("--- fin for of ---");