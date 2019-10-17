<?php
//session_name('test');
session_start();

//var_dump(session_get_cookie_params());die();
// session_start([
//     'read_and_close'  => true
// ]);
// session_get_cookie_params()
//var_dump(session_name(),session_get_cookie_params(),$_SERVER);die();

//var_dump(session_name());die();

if (isset($_SESSION['logged']) && $_SESSION['logged']==TRUE) {
    $resultado = NULL;
    $parametros = NULL;
    if ($_SERVER['REQUEST_METHOD'] == "GET")
    {

        $parametros = $_GET;
        $mysqli = new mysqli("mysql", "root", "root", "ecommerce", null);
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

            http_response_code(200);
            //header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
            header('Content-Type: application/json');
            $respuesta = [
                "status"=> 200,
                "response" => $data
            ];
            echo json_encode($respuesta);
        } else {
            http_response_code(200);
            //header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
            header('Content-Type: application/json');
            $respuesta = [
                "status"=> 200,
                "response" => null
            ];
            echo json_encode($respuesta);
        }

    }

    if ($_SERVER['REQUEST_METHOD'] == "POST")
    {
        if (isset($_SERVER['CONTENT_TYPE']) && $_SERVER['CONTENT_TYPE'] == 'application/json')
        {
            $requestDataJSON = file_get_contents('php://input');
            $parametros = json_decode($requestDataJSON, TRUE);
        } else {
            $parametros = $_POST;
        }

        $mysqli = new mysqli("mysql", "root", "root", "ecommerce", null);
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
                http_response_code(200);
                //header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
                header('Content-Type: application/json');
                $respuesta = [
                    "status"=>200,
                    "response" => 'ok'
                ];
                echo json_encode($respuesta);
            } else {
                http_response_code(400);
                //header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
                header('Content-Type: application/json');
                $respuesta = [
                    "status"=>400,
                    "response" => 'nok'
                ];
                echo json_encode($respuesta);
            }
        } else {
            http_response_code(400);
            //header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
            header('Content-Type: application/json');
            $respuesta = [
                "status"=>400,
                "response" => 'nok, verificar formulario'
            ];
            echo json_encode($respuesta);
        }

    }
} else {
    http_response_code(405);
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    header('Content-Type: application/json');
    $respuesta = [
        "status"=>405,
        "response" => 'no tiene permiso'
    ];
    echo json_encode($respuesta);
}






