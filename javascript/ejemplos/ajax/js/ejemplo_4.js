'use strict';
(function(){

function enlazarElementosHtml(){
   // formLogin
   var $formLogin = document.querySelector('#formLogin'),
       $formLoginMsg = document.querySelector('#formLogin .formMsg');

    $formLogin.onsubmit = function(evento){
        evento.preventDefault();
        var formLoginEsValido = false;


        formLoginEsValido = $formLogin.username.value && $formLogin.password.value;

        if (formLoginEsValido)
        {
            // de esta forma creo un objeto formData a partir de un elmento tipo form
            // usará los name de los input para enviarlos como parámetros
            // los datos son enviados como multipart/form-data
            var parametros = new FormData($formLogin); 
            var request = new XMLHttpRequest();
            var url = 'http://localhost/dam/php/ecommerce_ejemplo_5/user.php';
            request.open('POST', url, true);
            request.onreadystatechange = function(){
                if(request.status==200 && request.readyState==4){
                      // var respuestaDelServidor = JSON.parse(request.responseText);
                      $formLoginMsg.innerText = 'usuario logueado';
                      $formLogin.reset();
                } else if(request.readyState==4 && (request.status==400 || request.status==404)){
                  $formLoginMsg.innerText = 'usuario invalido';
                }
            };
            request.send(parametros);
        } else {
            alert('complete los datos faltantes');
        }
    
    };
   // fin formLogin

   // logout
   var $logoutBtn = document.querySelector('#logout');

   $logoutBtn.onclick = function(evento){
      evento.preventDefault();
      var formUnoEsValido;
      var parametros = '';

      parametros += 'logout=true'; 
      var request = new XMLHttpRequest();
      var url = 'http://localhost/dam/php/ecommerce_ejemplo_5/user.php';
      request.open('POST', url, true);// configuro mi request para que sea tipo POST
      // Este header es necesario para comunicar al servidor dónde son enviados los parámetros
      // application/x-www-form-urlencoded : los parámetros se enviaran en el cuerpo del request
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      request.onreadystatechange = function(){
          if(request.status==200 && request.readyState==4){
              $formLoginMsg.innerText = 'usuario deslogueado';              
          }
      };
      
      request.send(parametros);

   };
   // fin logout


    // productos
   var $logoutBtn = document.querySelector('#getProductos');

   $logoutBtn.onclick = function(evento){
     evento.preventDefault();
     var request = new XMLHttpRequest(); // creo un nuevo objeto XMLHttpRequest
     // asigno la url de mi API (aplicación de servidor)
     var url = 'http://localhost/dam/php/ecommerce_ejemplo_5/producto.php';

      request.open('GET', url, true); // configuración del request
      // propiedad onreadystatechange ,
      // esta propiedad se le asigna una función la cual se ejecutará
      // cuando se realice el request
      request.onreadystatechange = function(){
         /*
          La propiedad status tendrá el código de respuesta del servidor.
          La propiedad readyState tendrá el stado de cada momento del request, el valor 4
          será asiganado cuando se haya resuelto el request.
         */
         if(request.status==200 && request.readyState==4)
         {
             // JSON.parse se utiliza para convertir un string con formato json a un objeto javascript
             // La respuesta del request será asignada a la propiedad responseText
              var jsonData = JSON.parse(request.responseText);
              console.log(jsonData);
         } else if (request.status==400 && request.readyState==4){
              $formLoginMsg.innerText = 'request invalido';
         } else if (request.status==404 && request.readyState==4){
              $formLoginMsg.innerText = 'no hay productos';
         } else if (request.status==405 && request.readyState==4){
              $formLoginMsg.innerText = 'no tienes permiso';
         }
      };
      request.send(null); // ejecuta el request

   };
   // fin productos

}

window.onload = function(){
    enlazarElementosHtml(); // asigno los eventos y la lógica
};


})();
