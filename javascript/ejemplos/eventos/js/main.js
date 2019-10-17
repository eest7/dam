'use strict';
(function(){
    
    // funcion que asigna el comportamiento al boton submit
    // del formulario dos
    function enlazarElementosFormDos(){
        let $inputsFormDos = document.getElementsByClassName('formInput');
        let $submitBtn = document.querySelector('#formDos .btn');
        let $formMsg = document.querySelector('#formDos .formMsg');

        $submitBtn.onclick = function(event){
            let msg = "la edad es: "+$inputsFormDos.edad.value+", nombre: "+$inputsFormDos.nombre.value;
            // innerText se utiliza para asignar texto al value del elemento
            // en caso de querer asignar un html hay que usar innerHtml            
            $formMsg.innerText = msg; 
        };
    };

    // funcion que asigna el comportamiento al boton submit
    // del formulario tres
    function enlazarElementosFormTres(){
        let $buscador = document.querySelector('#buscador');
        let $formMsg = document.querySelector('#formTres .formMsg');

        // este evento previene el ingreso de texto no deseado
        // en este caso solo permite texto y especios
        $buscador.onkeypress = function(event){
            let key = event.which;
            if(!(key >= 65 && key <= 120) && (key != 32 && key != 0)) { 
                event.preventDefault(); 
            }
        };

        // este evento se ejecutará depués el anterior
        // asignará el texto ingresado por el teclado a un elemento h2, p, etc..
        $buscador.onkeyup = function(event){
            $formMsg.innerText = $buscador.value;
        };
    };

    function enlazarElementosFormCuatro(){
        let $telefono = document.querySelector('#tel');
        let $formMsg = document.querySelector('#formCuatro .formMsg');

        // este evento previene el ingreso de texto no deseado
        // en este caso solo permite numeros
        $telefono.onkeypress = function(event){
            let key = event.which;
            if(!(key >= 48 && key <= 57)) { 
                event.preventDefault(); 
            }
        };

        // este evento se ejecutará depués el anterior
        // asignará el texto ingresado por el teclado a un elemento h2, p, etc..
        $telefono.onkeyup = function(event){
            $formMsg.innerText = $telefono.value;
        };
    };

    // todo lo que esté aquí definido se ejecutará cuando haya cargado la página
    window.onload = function(){
        // accedo a los elementos del formulario uno y los asigno a una variable
        let $username = document.getElementsByName("username")[0];
        let $password = document.getElementById("password");
        let $formUno = document.querySelector("#formUno");

        /*
            Asigno una funcion al evento "onsubmit" del formulario
        */
        $formUno.onsubmit = function(event){
            event.preventDefault();//esta funcion corta la continuación de la ejecución del evento
            console.log("------- ejemplo : Evento onsubmit --------");
            let datosFormulario = $username.value +" "+ $password.value;
            console.log("datos del formulario:" + datosFormulario);
        }

        // invoco las funciones que asignan el comportamiento a los formularios
        enlazarElementosFormDos();
        enlazarElementosFormTres();
        enlazarElementosFormCuatro();

    };

})();



