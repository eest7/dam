<?php
require_once(__DIR__.'/../../src/Api/UserApiController.php');

$userApiController = new UserApiController();
echo $userApiController->resolveRequest();
