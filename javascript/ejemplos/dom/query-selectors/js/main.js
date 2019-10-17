/*
    Query selectores
*/

console.log('------ GET ELEMENT BY ID -------');
/**
 * getElementById
 *
 * Este selector solo devuelve el primer elemento coincidente mientras ignora el resto.
 * Devuelve null si no existen elementos con el ID especificado.
 *
 */
var $parrafoOne = document.getElementById('parrafo-uno');
console.log('Este es el parrafo numero uno: ', $parrafoOne);

//
//
//
//

console.log('------ GET ELEMENT BY CLASS NAME -------');
/**
 * getElementByClassName
 *
 * Este método devuelve un array con todos los elementos que coinciden con el nombre de clase especificada.
 *
 */
var $parrafos = document.getElementsByClassName('parrafo');
/**
 * Al retornar un array de nodos se pueden contar accediendo a la propiedad 'length'
 */
console.log('Cantidad elementos con la clase "parrafo": ', $parrafos.length);

//
//
//
//

console.log('------ GET ELEMENT BY TAG NAME -------');
/**
 * getElementsByTagName
 *
 * Este método devuelve un array con todos los elementos que coinciden con el nombre del tag html especificado.
 *
 */
var $elementosP = document.getElementsByTagName('p');
var $elementosHr = document.getElementsByTagName('hr');
var $elementosSmall = document.getElementsByTagName('small');
var $elementosStrong = document.getElementsByTagName('strong');
/**
 * Al retornar un array de nodos se pueden contar accediendo a la propiedad 'length'
 */
console.log('Cantidad elementos con el tag <p>: ', $elementosP.length);
console.log('Cantidad elementos con el tag <hr />: ', $elementosHr.length);
console.log('Cantidad elementos con el tag <small>: ', $elementosSmall.length);
console.log(
  'Cantidad elementos con el tag <strong>: ',
  $elementosStrong.length
);

//
//
//
//

console.log('------ QUERY SELECTOR -------');
/**
 * querySelector
 *
 * Este metodo devuelve el primer elemento que coincide con el selector CSS especificado.
 * Devuelve null si no existe elemento con el selector CSS especificado.
 *
 */
var $parrafo = document.querySelector('p.parrafo.parrafo-dos');
console.log('Parrafo numero dos: ', $parrafo);

//
//
//
//

console.log('------ QUERY SELECTOR ALL -------');
/**
 * querySelectorAll
 *
 * Este método devuelve todos los elementos que coinciden con el selector CSS especificado.
 *
 */
var $parrafoConStrongs = document.querySelectorAll('p.parrafo strong');
var $parrafoConSmalls = document.querySelectorAll('p.parrafo small');
/**
 * Al retornar un array de nodos se pueden contar accediendo a la propiedad 'length'
 */
console.log(
  'Cantidad de parrafos con un <strong> en su interior: ',
  $parrafoConStrongs.length
);
console.log(
  'Cantidad de parrafos con un <small> en su interior: ',
  $parrafoConSmalls.length
);
