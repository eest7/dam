<?php
require_once(__DIR__.'/../../core/Controller.php');

class IndexController extends Controller {

    public function get($params=null){
        $response = 'hola';
        foreach ($params as $key => $value) {
            $response .= " ".$value;
        }
        return $response;
    }

    public function post($params=null){
        return http_response_code(405);        
    }

    public function put($params=null){
        return http_response_code(405);
    }

    public function delete($params=null){
        return http_response_code(405);
    }

}
