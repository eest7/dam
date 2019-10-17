# Práctica 5

# Login
1. Cuando el usuario haga click en el botón "login":
    - a. Validar que el email no esté vacío
    - b. Validar que el password no esté vacío y que sea mayor a ocho carácteres
    - c. Simular un login creando una función llamada "simularLogin" que valide que el email sea "admin" y el password  "admin1234". Si es válido que redireccione usando la propiedad "window.location" a "dashboard.html"
2. - d. Agregar una nueva función que guarde en un array los usuarios que están en el archivo "json_data/users.json", al finalizar la carga de la página. (usar ajax.
   - f. Crear una función que reciba un parámetro llamado "id" (id de usuario.. La función debe buscar por el "id" el usuario en el array creado en el punto anterior y retornar un objeto con los datos del usuario. ej: "{"id":1,"username":"jose0@google.com","password":"XGohqSE"}";
   - g. Agregar un parámetro a la función creada en el punto anterior, verificar que el parámetro sea del tipo function. Si es del tipo "function" debe retornar un callback con el usuario encontrado. ej: "return cb(usuarioEncontrado.". Si no es del tipo "function" deberá retornar sólo el objeto con los datos del usuario.
   - h. Modificar el comportamiento al hacer click en el botón login, para que utilice la función anterior para loguear un usuario.(usutilizar el callback.
   - i. Almacenar en el localStorage o en el sessionStorage los datos del usuario


# Dashboard
1. Ocultar el elemento que muestra los datos del usuario
2. Crear una función que se ejecute al cargar la página, que asigne en un array las películas que se encuentran en el archivo "json_data/movies.json" y mostrar en una tabla solo 20 películas.
3. Al hacer click en el link "Profile" deberá ocultar la lista de películas y mostrar los datos del usuario, que se ocultaron en el punto 1. Para este punto se deberá usar el id del usuario que se ha guardado en el localStorage/sessionStorage. Buscar los datos del usuario por el id,  utilizando el archivo "json_data/userinfo.json"
4. Al hacer click en el link "Overview" deberá ocultar los datos del usuario y mostrar de nuevo la lista de películas.
5. Al hacer click en el link "logout" borrar los datos del localStorage/sessionStorage y redirecionar al "login.html"
6. Agregar un checkeo antes que cargue la lista de películas, que verifique si el usuario está logueado. Para ello , deberá checkear el localStorage/sessionStorage. Si hay datos de usuario deberá cargar la página de dashboard normalmente. Sino, el usuario deberá ser redireccionado al login.html
7. Asignar al text input de  "Search" el evento "onkeyup". Cuando se escriba una palabra mayor a dos letras, deberá buscar en el array de películas el string ingresado. Si existe, ocultar el actual listado y la película encontrada. 