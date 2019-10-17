<?php
require_once(__DIR__.'/../src/Controllers/IndexController.php');

$indexController = new IndexController();
$response = $indexController->resolveRequest();
?>

<h1><?php echo strtoupper($response) ?></h1>