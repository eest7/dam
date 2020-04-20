(function () {
  /**
   * Exercise 1
   * Enunciado:
   * Definir una función que determine si la cadena de texto
   * que se le pasa como parámetro es un palíndromo, es decir,
   * si se lee de la misma forma desde la izquierda y desde
   * la derecha. Ejemplo de palíndromo complejo: "La ruta nos
   * aporto otro paso natural".
   * 
   * Al presionar el botón pedir al usuario que ingrese una cadena
   * de texto y luego mostrar por pantalla el resultado devuelto
   * por la función.
   */
  const $btnExercise1 = document.getElementById('btn-exercise1');
  $btnExercise1.onclick = function () {
    console.log('click to: btn-exercise1');
  };


  /**
   * Exercise 2
   * Enunciado:
   * Nos contratan para desarrollar el menú del juego "Crash Bandicoot":
   * 
   * Al presionar el boton "Start" debemos imprimir por consola las
   * opciones del menú principal, las opciones son:
   * "1- Start", "2- Load game", "3- Password", "4- Options, "5- Leave Game"
   * 
   * Y luego usar la función prompt() para que el jugador ingrese la opción
   * con la que quiere interactuar.
   * 
   * Una vez que el jugador ingresa la opción debemos imprimir por consola
   * cada submenú, ó la acción que se describe en la opción:
   * 1) Start: acción: imprimir en consola "Loading...."
   * 2) Load Game: acción: imprimir en consola "Reading memory card...."
   * 3) Password: acción: imprimir submenú "1- Enter Password", 2- "main menu"
   * 4) Options: acción: imprimir submenú "1- Sound", "2- Language", "3- difficulty"
   */
  const $btnExercise2 = document.getElementById('btn-exercise2');
  $btnExercise2.onclick = function () {
    console.log('click to: btn-exercise2');
  };


  /**
   * Exercise 3
   * Enunciado:
   *  La empresa de Midway está creando el "NBA JAM", y nos pide que
   * calculemos los puntos cuando los jugadores encestan. Recordá que
   * tenemos dos formas que enceste en el juego. La primera es por fuera
   * del área (triple) son 3 puntos, y la segunda es forma es dentro del
   * área (doble) son 2 puntos.Cada juego está compuesto por dos equipos.
   * 
   * Al presionar el boton "Start" tendrás que calcular los puntos de ambos
   * y mostrar quién ganó.
   * 
   * A) Crear dos arrays con los puntos de cada equipo, cada array deberá
   *    tener al menos 40 ítems con un valor entre 2 y 3 numérico.
   * B) Sumar el total de puntos de cada equipo
   * C) Comparar el total de puntos e imprimir por consola quién ganó
   */
  const $btnExercise3 = document.getElementById('btn-exercise3');
  $btnExercise3.onclick = function () {
    console.log('click to: btn-exercise3');
  };


  /**
   * Exercise 4
   * Enunciado:
   * Definir una función que muestre información sobre una cadena de
   * texto que se le pasa como argumento. A partir de la cadena que se
   * le pasa, la función determina si esa cadena está formada sólo por
   * mayúsculas, sólo por minúsculas o por una mezcla de ambas.
   * 
   * Al presionar el botón pedir al usuario que ingrese una cadena de
   * texto y luego mostrar por pantalla el resultado devuelto por la función.
   */
  const $btnExercise4 = document.getElementById('btn-exercise4');
  $btnExercise4.onclick = function () {
    console.log('click to: btn-exercise4');
  };


  /**
   * Exercise 5
   * Enunciado:
   * Somos parte del equipo de Konami que desarrolla el juego "Contra", y
   * tenemos que crear una función que imprima por consola el resumen
   * de la partida jugada de cada stage.
   * 
   * La función deberá recibir 5 parámetros, los parámetros son:
   * 1) nombreJugador (valor string)
   * 2) vidaRestante (valor number, entre 1 y 1000)
   * 3) puntos (valor number, entre 0 y 99999)
   * 4) stage (valor number, entre 1 y 8)
   * 5) destruccionesPorSección (array de tipo numbers)
   * 
   * Al presionar el boton "Start" pedir los datos necesarios y...
   * 
   * 1) La función deberá validar el tipo y valor de cada parámetro
   * 2) El valor a mostrar de la vida restante, debe ser el porcentaje
   *    de la vida. Ej: si el valor del parámetro es 100 eso representa
   *    al 10% de la vida.
   * 3) El valor del stage puede ser entre 1 y 8, y deberá mostrarse en
   *    el resumen el nombre del stage:
   *    1. Jungle
   *    2. Base
   *    3. Waterfall
   *    4. Base
   *    5. Snow
   *    6. Energy
   *    7. Hangar
   *    8. Alien's
   * 4) El valor de "Destrucciones Totales" deberá ser calculado sumando
   *    todas las destrucciones por sección.
   */
  const $btnExercise5 = document.getElementById('btn-exercise5');
  $btnExercise5.onclick = function () {
    console.log('click to: btn-exercise5');
  };


  /**
   * Exercise 6
   * Enunciado:
   * Escribir el código de una función a la que se pasa como parámetro
   * un número entero y devuelve como resultado una cadena de texto que
   * indica si el número es par o impar.
   * 
   * Al presionar el botón pedir al usuario un numero y luego mostrar
   * por pantalla el resultado devuelto por la función.
   */
  const $btnExercise6 = document.getElementById('btn-exercise6');
  $btnExercise6.onclick = function () {
    console.log('click to: btn-exercise6');
  };
})()