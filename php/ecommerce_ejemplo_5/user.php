<?php
$resultado = NULL;
$parametros = NULL;


if ($_SERVER['REQUEST_METHOD'] == "POST")
{
    $parametros = $_POST;
    if (isset($parametros['logout'])){
        session_name('test');
        session_start();
        session_unset();
        session_destroy(); // here it fails


        //setcookie('test', "", 1);
        //setcookie('test', false);
        unset($_COOKIE);
        $_SESSION = array();
        // session_start();
        // session_destroy();
        // setcookie( session_name(), "", time()-3600, "/" );



        // Finalmente, destruir la sesión.
        http_response_code(200);
        header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
        header('Content-Type: application/json');
        $respuesta = [
            "status"=> 200,
            "response" => null
        ];
        echo json_encode($respuesta);
    } else if (isset($parametros['password']) && isset($parametros['username'])) {
        $mysqli = new mysqli("mysql", "root", "root", "ecommerce", null);
        if ($mysqli->connect_errno) {
            echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
        }

        $query = "SELECT * FROM user WHERE password='".$parametros['password']."' AND username='".$parametros['username']."' limit 1";
        $resultado = $mysqli->query($query);

        $data = [];
        if ($resultado->num_rows > 0)
        {
            while ($fila = $resultado->fetch_assoc())
            {
                $data[] = $fila;
            }

            // $session_time = time() + (86400 * 30);
            // session_set_cookie_params($session_time);

            // session_name('test');
            // session_regenerate_id(true);
            // session_set_cookie_params(time() + 3600, '/', 'localhost', false, true);
            // session_start($session_time);
            // session_start();


            $currentCookieParams = session_get_cookie_params();

            $rootDomain = 'localhost';

            session_set_cookie_params(
                $currentCookieParams["lifetime"],
                $currentCookieParams["path"],
                $rootDomain,
                $currentCookieParams["secure"],
                $currentCookieParams["httponly"]
            );

            //session_name('test');
            session_start();

            $_SESSION['user'] = $data[0];
            $_SESSION['instante'] = time();
            $_SESSION['logged'] = TRUE;
            //setcookie('myapp',$_SESSION['user'],  time() + (86400 * 30), "/", "app.com", 1);

            // clear headers
            // set del codigo de respuestas
            http_response_code(200);
            // forzar la cache del header
            header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
            // interpretación de formato json
            header('Content-Type: application/json');

            $respuesta = [
                "status"=> 200,
                "response" => $data
            ];
            echo json_encode($respuesta);
        } else {
            http_response_code(404);
            header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
            header('Content-Type: application/json');
            $respuesta = [
                "status"=> 404,
                "response" => null
            ];
            echo json_encode($respuesta);
        }
    } else {
        http_response_code(400);
        header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
        header('Content-Type: application/json');
        $respuesta = [
            "status"=> 400,
            "response" => null
        ];
        echo json_encode($respuesta);
    }

}
