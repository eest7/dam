<?php
require_once (__DIR__ .'/../vendor/autoload.php');
require_once (__DIR__ ."/core/Route.php");
require_once(__DIR__.'/controllers/IndexController.php');


$url = str_replace(
	['/dam/php/ecommerce_ejemplo_4/'],
	'/',
	explode('?', $_SERVER['REQUEST_URI'], 2)[0]
);


route('/', function () {
    $controller = new IndexController();
    echo $controller->resolveRequest();
});

route('/about', function () {
    return "Hello form the about route";
});

dispatch($url);
