'use strict';
(function(){
   
    // array de numeros
    var listaNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    // array de objetos
    var listaUsuarios = [
        {"id":1,"username":"byukhnevich0@privacy.gov.au","password":"XGohqSE", "active":false, "edad": 40},
        {"id":2,"username":"bmerredy1@netvibes.com","password":"78IdWHC", "active":true, "edad": 35,},
        {"id":3,"username":"phalstead2@youku.com","password":"WgLrJiAkH", "active":false, "edad": 20},
        {"id":4,"username":"olangelaan3@washingtonpost.com","password":"SSUpikdt4k", "active":false, "edad": 58},
        {"id":5,"username":"nroden4@tinypic.com","password":"RJ4Ecf", "active":true, "edad": 28}
    ];


    console.log("------------- ejemplo 1: forEach Array de numeros --------------");
    /**
     * El forEach recibe como prametro un callback (funcion)
     * el primer parámetro es el elemento (valor) y 
     * el segundo al índice (posición del array) del elemento
     */
    listaNumeros.forEach(function(elemento, indice){
        console.log('indice'+indice,elemento);
    });

    console.log("------------- ejemplo 2: forEach Array de objetos --------------");
    listaUsuarios.forEach(function(elemento, indice){
        // cuando mi elemento es un objeto
        // puedo acceder a las propiedades del objeto utilizando el punto
        // después del nombre de la variable
        if(elemento.id === 3){
            console.log('indice'+indice,elemento);
            return;
        }
    });
    

    /**
     * Map: función que recorre el array y aplica a cada elemento del array lo definido en la función
     * y retorna un nuevo array
     * 
     * Reduce: función que asigna el resultado de la operación a un acumulador con el fin
     * de retornar un único resultado
     * 
     * Filter: función que recorre el array y retorna un nuevo array con los elementos que
     * cumplan con la condición implementada
     */
    console.log("------------- ejemplo 3:  map, reduce y filter Array de numeros --------------");

    var listaDeNumerosAlCuadrado = listaNumeros.map(function(elemento, indice){
        return Math.pow(elemento, 2);
    });
    console.log('(uso map) lista nueva de números al cuadrado', listaDeNumerosAlCuadrado);

    var sumaTotal = listaNumeros.reduce(function(valorAnterior, valorActual, indice){
        return valorAnterior + valorActual;
    });
    console.log('(uso reduce) suma de todos los elementos', sumaTotal);

    var listaDeNumerosFiltrados = listaNumeros.filter(function(elemento, indice){
        let esMultiploDeDos = elemento % 2;
        if (esMultiploDeDos === 0)
        {
            return true;
        }
        return false;
    });
    console.log('(uso filter) lista nueva filtrada',listaDeNumerosFiltrados);

    console.log("------------- ejemplo 3:  map, reduce y filter Array de objetos --------------");

    var listaUsuariosModificados = listaUsuarios.map(function(elemento, indice){
        elemento.password = "123456";
        elemento.email = elemento.username;
        return elemento;
    });
    console.log('(uso map) lista nueva de usuarios agregánoles una nueva propiedad', listaUsuariosModificados);

    var sumaEdadTotalUsuarios = listaUsuarios.reduce(function(valorAnterior, valorActual, indice){
        if(typeof valorAnterior == "number"){
            return valorAnterior + valorActual.edad;
        }
        return valorAnterior.edad + valorActual.edad;
    });
    var promedioEdadUsuarios = sumaEdadTotalUsuarios / listaUsuarios.length;
    console.log('(uso reduce) promedio edad usuarios', promedioEdadUsuarios);

    var listaDeUsuariosFiltrados = listaUsuarios.filter(function(elemento, indice){
        if (elemento.active === true)
        {
            return true;
        }
        return false;
    });
    console.log('(uso filter) lista nueva filtrada',listaDeUsuariosFiltrados);
})();



