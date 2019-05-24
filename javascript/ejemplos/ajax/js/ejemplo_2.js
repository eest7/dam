'use strict';
(function(){

// elemento spinner
let $loading = document.getElementById("loading");

// función con la lógica de generación de la tabla
function crearTablaProductos(listaProductos){
    var $listaProductos = document.getElementById('listaProductos');
    var tabla = `<table>
                <tr>
                    <td>ID</td>
                    <td>PRODUCTO</td>
                    <td>PRECIO</td>
                    <td>CANTIDAD</td>
                </tr>`;
        
    if (listaProductos)
    {
        listaProductos.forEach(function(elemento, index){
            tabla += '<tr>'
                +'<td>'+ elemento.id +'</td>'
                +'<td>'+ elemento.name +'</td>' 
                +'<td>'+ elemento.price +'</td>'
                +'<td>'+ elemento.quantity +'</td>'
                +'</tr>';
        });
    }
    
    tabla += '</tabla>';
    $listaProductos.innerHTML = tabla;
}

// Función con la lógica para buscar un producto por el id
function traerProductos(id){
   let $listaProductos = document.getElementById('listaProductos');
   let req = new XMLHttpRequest(); // creo un nuevo objeto XMLHttpRequest
   // asigno la url de mi API (aplicación de servidor)
   let url = 'http://localhost/dam/php/ecommerce_ejemplo_1/producto.php';
   if (id)
   {
    url += '?id='+id; // asigno los parámetros a la url (querystring)
   }
    req.open('GET', url, true); // configuración del request
    // propiedad onreadystatechange ,
    // esta propiedad se le asigna una función la cual se ejecutará
    // cuando se realice el request
    req.onreadystatechange = function(){
       /*
        La propiedad status tendrá el código de respuesta del servidor.
        La propiedad readyState tendrá el stado de cada momento del request, el valor 4
        será asiganado cuando se haya resuelto el request.
       */
       if(req.status==200 && req.readyState==4)
       {
           // JSON.parse se utiliza para convertir un string con formato json a un objeto javascript
           // La respuesta del request será asignada a la propiedad responseText
            var jsonData = JSON.parse(req.responseText);
            crearTablaProductos(jsonData.response); // una vez resuelto el request creo la tabla
            $loading.className = "ocultar"; // oculto spinner
            $listaProductos.className = ""; // muestro tabla
       }
    };
    req.send(null); // ejecuta el request
    $listaProductos.className = "ocultar"; // oculta la tabla
    $loading.className = ""; // muestra el spinner
}

function traerProductosEjemploObject(idProducto){
    let $listaProductos = document.getElementById('listaProductos');
    let req = new XMLHttpRequest();
    let url = 'http://localhost/dam/php/ecommerce_ejemplo_1/producto.php';
    let parametros = '';
    let datos = {
        id: idProducto
    };

    // este bucle asigna los parámetros a la url (querystring)
    for (let key in datos) {
        // los object tienen una función llamada hasOwnProperty
        // la cual se utiliza para saber si una propiedad le pertenece
        // al objeto
        if (datos.hasOwnProperty(key)) {
            if (datos[key])
            {
                if (!parametros)
                {
                    parametros += '?' + key + '=' + datos[key];               
                } else {
                    parametros += '&' + key + '=' + datos[key];
                }
            }  
        }
    }

    req.open('GET', url+parametros, true);
    req.onreadystatechange = function(){
        if(req.status==200 && req.readyState==4)
        {
            var jsonData = JSON.parse(req.responseText);
            crearTablaProductos(jsonData.response);
            $loading.className = "ocultar";
            $listaProductos.className = "";
        }
    };
    req.send();
    $listaProductos.className = "ocultar";
    $loading.className = "";
}

window.onload = function(){
    traerProductos(); // trae los datos de la tabla al cargar la página
    let $formUno = document.querySelector('#formUno');
    // asigno la funcionalidad al evento onsubmit para buscar un producto por el id
    $formUno.onsubmit = function(evento){
        evento.preventDefault();// esta función evita que siga la ejecución del submit
        traerProductos($formUno.id.value);// ejecuto request y si existe el producto lo muestra
    };

    let $formDos = document.querySelector('#formDos');
    $formDos.onsubmit = function(evento){
        evento.preventDefault();
        traerProductosEjemploObject($formDos.id.value);
    };
};


})();


