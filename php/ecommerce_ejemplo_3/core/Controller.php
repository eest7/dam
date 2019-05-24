<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */


abstract class Controller {

    public $request;
    public $request_method;
    public $allowed_methods;
    public $path;


    function __construct($path=[], $allowed_methods=['GET','POST','PUT','DELETE']){
        $this->request_method = $_SERVER['REQUEST_METHOD'];
        $this->allowed_methods = $allowed_methods;
        $this->path = $path;
    }

    abstract protected function get($params=null);
    abstract protected function post($params=null);
    abstract protected function put($params=null);
    abstract protected function delete($params=null);

    public function json_response($response = null, $code = 200) {
        // clear headers
        header_remove();
        // set del codigo de respuestas
        http_response_code($code);
        // forzar la cache del header
        header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
        // interpretación de formato json
        header('Content-Type: application/json');
        $status = array(
            200 => '200 OK',
            400 => '400 Bad Request',
            403 => 'forbidden',
            404 => 'Not Found',
            405 => 'Method not Allowed',
            503 => 'Service Unavailable',
            500 => '500 Internal Server Error'
            );
        // ok, validación error, o falla
        header('Status: '.$status[$code]);
        // retorna json
        echo json_encode(array(
            'status' => $code < 300,
            'response' => $response
            ));
    }
    
    public function resolveRequest(){
        if(in_array($this->request_method, $this->allowed_methods)){
            $request_type = strtolower($this->request_method);
            $getRequestData = function(){
                $params = [];
                $data = fopen("php://input", "r");
                $str = urldecode(stream_get_contents($data));
                fclose($data);
                foreach (explode('&', $str) as $value) {
                    $param = explode('=', $value);
                    $params[$param[0]] = $param[1];
                }
                return $params;
            };
            $getPostData = function(){
                $params = null;
                if (isset($_SERVER['CONTENT_TYPE']) && $_SERVER['CONTENT_TYPE'] == 'application/json')
                {
                    $requestDataJSON = file_get_contents('php://input');
                    $params = json_decode($requestDataJSON, TRUE);
                } else {
                    $params = $_POST;
                }
                return $params;
            };
            switch ($request_type) {
                case 'get':
                    return $this->get($_GET);
                    break;
                case 'post':
                    return $this->post($getPostData());
                    break;
                case 'put':
                    return $this->put($getRequestData());
                    break;
                case 'delete':
                    return $this->delete($getRequestData());
                    break;
                default:
                    return http_response_code(405);
                    break;
            }
        }else{
            return http_response_code(405);
        }
    }

}
