<?php
require_once('api.php');

$resultado = NULL;
$parametros = NULL;

$request = resolveRequest();

if ($request['method']==='get')
{
	$parametros = $_GET;
    $mysqli = new mysqli("localhost", "root", "", "ecommerce", 3306);
    if ($mysqli->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    if (isset($parametros['id']))
    {
        $query = "SELECT * FROM product WHERE id=".$parametros['id'];
        $resultado = $mysqli->query($query);
    } else {
        $query = "SELECT * FROM product ORDER BY id ASC";
        $resultado = $mysqli->query("SELECT * FROM product ORDER BY id ASC");
    }

    $data = [];
    if ($resultado->num_rows > 0)
    {
        while ($fila = $resultado->fetch_assoc())
        {
            $data[] = $fila;
        }
        json_response($data, 200);
    } else {
        json_response($data, 200);
    }
}


if ($request['method']==='post')
{
	$mysqli = new mysqli("localhost", "root", "", "ecommerce", 3306);
	if ($mysqli->connect_errno) {
		echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}
	
	// validar el texto que llega para prevenir inyecciones de sql
	// $mysqli->error
	if (isset($parametros['nombre']) && isset($parametros['cantidad']) && isset($parametros['precio']) && isset($parametros['tipo']))
	{
		$insertQuery = "INSERT INTO product (name, quantity, price, product_type_id) VALUES (";
		$insertQuery .= "'".$parametros['nombre']."'".','.$parametros['cantidad'].','.$parametros['precio'].','.$parametros['tipo'].')';
	
		if($mysqli->query($insertQuery) === TRUE)
		{
			$respuesta = [
				"status"=>200,
				"response" => 'ok'
			];
			json_response($respuesta, 200);
		}else {
			$respuesta = [
				"status"=>200,
				"response" => 'nok'
			];
			json_response($respuesta, 200);
		}
	} else {
		$respuesta = [
			"status"=>200,
			"response" => 'nok, verificar formulario'
		];
		json_response($respuesta, 200);
	}
}
