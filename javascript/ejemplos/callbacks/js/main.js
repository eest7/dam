'use strict';
(function(){

    // funcion que recibe como parametros dos numeros y una funcion
    // retorna una funcion con el resultado de la operación
    function sumar(a, b, callback){
        if(typeof callback == "function"){
            let resultado = a + b;
            return callback(resultado);
        }
    }

    // funcion que recibe como parametros dos numeros y una funcion
    // retorna una funcion con el resultado de la operación
    function multiplicar(a, b, callback){
        if(typeof callback == "function"){
            let resultado = a * b;
            return callback(resultado);
        }
    }

    // funcion que recibe como parametros un array de numeros y una funcion
    // retorna una funcion con el resultado de la operación
    function calcularPromedio(lista, callback){
        if(Array.isArray(lista))
        {
            let sumaTotal = 0;
            let promedio = 0;
            for (let elemento of lista) {
                sumaTotal += elemento;
            }
            promedio = sumaTotal / lista.length
            return callback(promedio);
        }
    }

    // funcion que recibe como parametro una funcion
    // retorna una funcion con los valores de los elementos username y password
    function login(callback){
        if(typeof callback == "function"){
            let $username = document.getElementById("username");
            let $password = document.getElementById("password");
            return callback($username.value, $password.value);
        }
    }

    console.log("------------- ejemplo 1: suma de números --------------");
    
    sumar(3,4,function(sumaDelasVariables){
        console.log('el resultado de la suma es: '+sumaDelasVariables);
    });

    console.log("------------- ejemplo 2:  suma y modifica resultado --------------");
    sumar(10,10,function(resultado){
        let promedio = resultado / 2;
        console.log('el resultado de la suma es: '+promedio);
    });

    console.log("------------- ejemplo 3: suma y luego multiplica (callback anidado) --------------");
    sumar(10,10,function(resultado){
       multiplicar(resultado, 1000, function(resultadoMultiplicacion){
        console.log('el resultado de la multiplicacion es: '+resultadoMultiplicacion);
       });
    });

    console.log("------------- ejemplo 4: promedio de array --------------");
    let listaNumeros = [2,3,4,5,6,7,7,8,8,6,5,4,3,2];
    calcularPromedio(listaNumeros, function(promedio){
        console.log('el promedio del array es: '+promedio);
    });

    console.log("------------- ejemplo 5: hago login si no son nulos los datos del usuario --------------");
    let $loginBtn = document.querySelector('#loginBtn');
    $loginBtn.onclick = function(event){
        login(function(username, password){
            if(username && password){
                alert("login exitoso!!, usuario: "+ username+', password: '+ password);
            }else{
                alert("verifique sus creenciales");
            }
        });
    };
    

})();



