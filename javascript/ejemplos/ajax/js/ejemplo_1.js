'use strict';
(function(){

// función que enlaza los eventos de la tabla generada
function bindTabla(){
    var $listaUsuarios = document.querySelector('#listaUsuarios');
    // Este evento se ejecutará  al hacer click sobre el div
    // o cualquier elemento que esté dentro del mismo
    $listaUsuarios.addEventListener('click', function (event) {
        let elemento = event.target;// elemento del div el cual se efectuo el evento
        // verifico si es el elemento el cual quiero asiganar alguna funcionaliad
        if (elemento.classList.contains("btnEliminar"))
        {
            console.log("ID de elemento para ser eliminado: "+elemento.value);
        }

        if (elemento.classList.contains("btnEditar"))
        {
            console.log("ID de elemento para ser editado: "+elemento.value);
        }

    }, false);

}

// Esta función recibe como parámetro un array, crea una tabla
// y la inserta en el el div con id="listaUsuarios"
function crearTablaUsuarios(listaUsuarios){
    // variable tipo string que almacenará la tabla
    var tabla = `<table>
                <tr>
                    <td>ID</td>
                    <td>USERNAME</td>
                    <td>PASSWORD</td>
                    <td>ACCIÓN</td>
                </tr>`;
    var $listaUsuarios = document.getElementById('listaUsuarios');
    // el foreach agregará cada elemento a la tabla haciendo una concatenación
    listaUsuarios.forEach(function(elemento, index){
        tabla += '<tr>'
                +'<td>'+ elemento.id +'</td>'
                +'<td>'+ elemento.username +'</td>' 
                +'<td>'+ elemento.password +'</td>'
                +'<td>'
                    + '<button class="btnEliminar" value="'+ elemento.id +'">eliminar</button>' 
                    + '<button class="btnEditar" value="'+ elemento.id +'">editar</button>'
                +'</td>'
                +'</tr>';
    });

    
    tabla += '</tabla>'; // cierre del tag
    $listaUsuarios.innerHTML = tabla; // asigna la tabla al elemento
    // una vez asignada la tabla al elemnto 
    // se llama a la función que enlaza los eventos para la tabla 
    bindTabla(); 
}

// función que ejecuta el request
function traerUsuarios(){
   let req = new XMLHttpRequest(); // creo un nuevo objeto  XMLHttpRequest
    req.open('GET', '../json_data/users.json', true); // configuración del request (tipo, url, asincrónico)
    // esta propiedad se le asigna una función la cual se ejecutará
    // cuando se realice el request
    req.onreadystatechange = function(){
       /*
       La propiedad status tendrá el código de respuesta del servidor.
       La propiedad readyState tendrá el stado de cada momento del request, el valor 4
       será asiganado cuando se haya resuelto el request.
       */
       if(req.status==200 && req.readyState==4){
           // JSON.parse se utiliza para convertir un string con formato json a un objeto javascript
           // La respuesta del request será asignada a la propiedad responseText
            var response = JSON.parse(req.responseText);
            // una vez resuelto el request creo la tabla
            crearTablaUsuarios(response);
       }
    };
    // la función send es la que efectúa el request
    req.send(null);
}

// la función onload se ejecutará al terminar de cargar la página
window.onload = function(){
    traerUsuarios();
};


})();


