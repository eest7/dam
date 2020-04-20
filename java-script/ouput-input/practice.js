(function () {
  /**
   * Exercise 1
   * Enunciado:
   * Al presionar el botón, se debe mostrar un mensaje 
   * por alert() con el siguiente mensaje "Esto funciona de maravilla".
   */
  const $btnExercise1 = document.getElementById('btn-exercise1');
  $btnExercise1.onclick = function () {
    console.log('click to: btn-exercise1');
  };


  /**
   * Exercise 2
   * Enunciado:
   * Al presionar el botón "mostrar" debemos lograr tomar
   * datos por prompt() y luego mostrarlo con alert().
   */
  const $btnExercise2 = document.getElementById('btn-exercise2');
  $btnExercise2.onclick = function () {
    console.log('click to: btn-exercise2');
  };


  /**
   * Exercise 3
   * Enunciado:
   * Al presionar el botón "mostrar", debemos lograr tomar
   * los datos ingresados en el text field (id: #input-exercise3) y
   * luego mostrarlo con alert().
   */
  const $btnExercise3 = document.getElementById('btn-exercise3');
  $btnExercise3.onclick = function () {
    console.log('click to: btn-exercise3');
  };


  /**
   * Exercise 4
   * Enunciado:
   * Al presionar el botón "mostrar" debemos lograr tomar datos
   * por prompt() y a continuacion cargar esos datos en el
   * text field (id: #id-exercise4).
   */
  const $btnExercise4 = document.getElementById('btn-exercise4');
  $btnExercise4.onclick = function () {
    console.log('click to: btn-exercise4');
  };


  /**
   * Exercise 5
   * Enunciado:
   * Debemos lograr tomar nombre y edad cargados en los text
   * fields (ids: #input-nombre-exercise5 y #input-edad-exercise5) y
   * mostrarlos concatenados (ej.: "Usted se llama José y tiene 66 años")
   * con alert().
   */
  const $btnExercise5 = document.getElementById('btn-exercise5');
  $btnExercise5.onclick = function () {
    console.log('click to: btn-exercise5');
  };


  /**
   * Exercise 6
   * Enunciado:
   * Debemos lograr tomar los dos numeros ingresados en
   * los text fields (id: #input-numero1-exercise6 y #input-numero2-exercise6),
   * transformarlos a enteros usando parseInt() y sumarlos.
   * Mostar el resultado por medio de alert() ej.: "la suma es 750".
   */
  const $btnExercise6 = document.getElementById('btn-exercise6');
  $btnExercise6.onclick = function () {
    console.log('click to: btn-exercise6');
  };


  /**
   * Exercise 7
   * Enunciado:
   * Debemos lograr tomar los dos numeros ingresados en los text
   * fields (id: #input-numero1-exercise7 y #input-numero2-exercise7),
   * transformarlos a enteros usando parseInt() realizar la operación
   * correcta y mostar el resulto por medio de alert() ej.: "La resta es 750".
   */
  const $btnSumarExercise7 = document.getElementById('btn-sumar-exercise7');
  const $btnRestarExercise7 = document.getElementById('btn-restar-exercise7');
  const $btnDividirExercise7 = document.getElementById('btn-dividir-exercise7');
  const $btnMultiplicarExercise7 = document.getElementById('btn-multiplicar-exercise7');

  $btnSumarExercise7.onclick = function () {
    console.log('click to: btn-sumar-exercise7');
  };
  $btnRestarExercise7.onclick = function () {
    console.log('click to: btn-restar-exercise7');
  };
  $btnDividirExercise7.onclick = function () {
    console.log('click to: btn-dividir-exercise7');
  };
  $btnMultiplicarExercise7.onclick = function () {
    console.log('click to: btn-multiplicar-exercise7');
  };


  /**
   * Exercise 8
   * Enunciado:
   * Debemos lograr tomar los dos numeros ingresados en los text
   * fields (id: #input-numero1-exercise8 y #input-numero2-exercise8),
   * transformarlos a enteros usando parseInt(), realizar la operación
   * correcta y mostrar el resto entre el dividendo y el divisor. ej.: "El resto es 0".
   */
  const $btnExercise8 = document.getElementById('btn-exercise8');
  $btnExercise8.onclick = function () {
    console.log('click to: btn-exercise8');
  };


  /**
   * Exercise 9
   * Enunciado:
   * Debemos lograr tomar el sueldo ingresado en el text field
   * (id: #input-sueldo-exercise9) , transformarlo a entero parseInt(),
   * luego mostrar el sueldo con un aumento del 10 %. en el text field
   * resultado (id: id: #input-resultado-exercise9).
   */
  const $btnExercise9 = document.getElementById('btn-exercise9');
  $btnExercise9.onclick = function () {
    console.log('click to: btn-exercise9');
  };

  /**
   * Exercise 10
   * Enunciado:
   * Debemos lograr tomar el importe ingresado en el text field
   * (id: #input-importe-exercise10), transformarlo a entero con 
   * parseInt(), luego mostrar el importe con un descuento del
   * 25% en el text field resultado (id: id: #input-resultado-exercise10).
   */
  const $btnExercise10 = document.getElementById('btn-exercise10');
  $btnExercise10.onclick = function () {
    console.log('click to: btn-exercise10');
  };
})()