<?php
require_once(__DIR__.'/../../src/Api/ProductApiController.php');

$productApiController = new ProductApiController();
echo $productApiController->resolveRequest();
