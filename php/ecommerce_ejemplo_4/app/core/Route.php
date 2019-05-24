<?php

/**
 * guarda el registro de las rutas
 *
 * @var array $routes
 */
$routes = [];

/**
 * Registro nueva ruta
 *
 * @param $action string
 * @param \Closure $callback se llama cuando la url coincide
 */
function route($action, Closure $callback)
{
    global $routes;
    $action = trim($action, '/');
    $routes[$action] = $callback;
}

/**
 * Envia la acción al router correspondiente 
 *
 * @param $action string
 */
function dispatch($action)
{
    global $routes;
    $action = trim($action, '/');
    if (isset($routes[$action])) 
    {
    	$callback = $routes[$action];
    	echo call_user_func($callback);
    } else {
    	echo("404 Not Found");
    	http_response_code(404);
    }
    
}
