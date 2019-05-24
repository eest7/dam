'use strict';
(function(){

function enlazarElementosHtml(){
   // formUno
   let $formUno = document.querySelector('#formUno');
   let $formUnoInputs = document.querySelectorAll('#formUno .formInput');
   let $formUnoMsg = document.querySelector('#formUno .formMsg');

   $formUno.onsubmit = function(evento){
       evento.preventDefault();
       let formUnoEsValido;
       let parametros = '';

       // esta variable será true si todos los input tienen algun valor
       formUnoEsValido = $formUno.nombre.value && $formUno.cantidad.value && $formUno.precio.value && $formUno.tipo.value;

       if (formUnoEsValido)
       {
           // concateno los parámetros con los valores de los input
            $formUnoInputs.forEach(function(elemento, indice){
                if (elemento.value)
                {
                    if (!parametros)
                    {
                        parametros += elemento.name + '=' + elemento.value;               
                    } else {
                        parametros += '&' + elemento.name + '=' + elemento.value;
                    }
                }
            });
            let request = new XMLHttpRequest();
            let url = 'http://localhost/dam/php/ecommerce_ejemplo_1/producto.php';
            request.open('POST', url, true);// configuro mi request para que sea tipo POST
            // Este header es necesario para comunicar al servidor dónde son enviados los parámetros
            // application/x-www-form-urlencoded : los parámetros se enviaran a trvés de la url
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.onreadystatechange = function(){
                if(request.status==200 && request.readyState==4){
                        let respuestaDelServidor = JSON.parse(request.responseText);
                        // verifico si el servidor me responde que el producto fue creado
                        if (respuestaDelServidor.response === 'ok')
                        {
                            $formUnoMsg.innerText = 'El producto ha sido creado';
                            $formUno.reset(); // limpio el formulario
                        } else {
                            $formUnoMsg.innerText = 'Verificar los datos ingresados';
                        }
                        
                }
            };
            request.send(parametros);
       } else {
            alert('complete los datos faltantes');
       }

   };
   // fin formUno

   // formDos
   let $formDos = document.querySelector('#formDos'),
       $formDosNombre = document.querySelector('#formDos #nombre'),
       $formDosPrecio = document.querySelector('#formDos #precio'),
       $formDosCantidad = document.querySelector('#formDos #cantidad'),
       $formDosTipo = document.querySelector('#formDos #tipo'),
       $formDosMsg = document.querySelector('#formDos .formMsg');

    $formDos.onsubmit = function(evento){
        evento.preventDefault();
        let formDosEsValido = false;

        let parametros = {
            nombre: $formDosNombre.value,
            precio: $formDosCantidad.value,
            cantidad: $formDosPrecio.value,
            tipo: $formDosTipo.value
        };

        formDosEsValido = parametros.nombre && parametros.cantidad && parametros.precio && parametros.tipo;

        if (formDosEsValido)
        {
            let request = new XMLHttpRequest();
            let url = 'http://localhost/dam/php/ecommerce_ejemplo_1/producto.php';
            request.open('POST', url, true);// configuro mi request para que sea tipo POST
            // Este header es necesario para comunicar al servidor dónde son enviados los parámetros
            // application/json : los parámetros se enviaran a través del body del request
            request.setRequestHeader("Content-Type", "application/json");
            request.onreadystatechange = function(){
                if(request.status==200 && request.readyState==4){
                        let respuestaDelServidor = JSON.parse(request.responseText);
                        if (respuestaDelServidor.response === 'ok')
                        {
                            $formDosMsg.innerText = 'El producto ha sido creado';
                            $formDos.reset();
                        } else {
                            $formDosMsg.innerText = 'Verificar los datos ingresados';
                        }
                        
                }
            };
            // la función JSON.stringify() transforma una variable tipo object a un string con formato Json
            request.send(JSON.stringify(parametros));
        } else {
            alert('complete los datos faltantes');
        }
    
    };
   // fin formDos

   // formTres
   let $formTres = document.querySelector('#formTres'),
       $formTresMsg = document.querySelector('#formTres .formMsg');

    $formTres.onsubmit = function(evento){
        evento.preventDefault();
        let formTresEsValido = false;


        formTresEsValido = $formTres.nombre.value && $formTres.precio.value && $formTres.cantidad.value && $formTres.tipo.value;

        if (formTresEsValido)
        {
            // de esta forma creo un objeto formData a partir de un elmento tipo form
            // usará los name de los input para enviarlos como parámetros
            // los datos son enviados como multipart/form-data
            let parametros = new FormData($formTres); 
            let request = new XMLHttpRequest();
            let url = 'http://localhost/dam/php/ecommerce_ejemplo_1/producto.php';
            request.open('POST', url, true);
            request.onreadystatechange = function(){
                if(request.status==200 && request.readyState==4){
                        let respuestaDelServidor = JSON.parse(request.responseText);
                        if (respuestaDelServidor.response === 'ok')
                        {
                            $formTresMsg.innerText = 'El producto ha sido creado';
                            $formTres.reset();
                        } else {
                            $formTresMsg.innerText = 'Verificar los datos ingresados';
                        }
                }
            };
            request.send(parametros);
        } else {
            alert('complete los datos faltantes');
        }
    
    };
   // fin formTres

}

window.onload = function(){
    enlazarElementosHtml(); // asigno los eventos y la lógica
};


})();

