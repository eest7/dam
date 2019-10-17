<?php
require_once(__DIR__.'/../../core/Controller.php');
require_once(__DIR__.'/../models/ProductModel.php');

class ProductApiController extends Controller {

    public function get($params=null){
        $productModel = new ProductModel();
        $response = $productModel->getAll();
        return $this->json_response($response, 200);
    }

    public function post($params=null){
        return $this->json_response('ok', 200);        
    }

    public function put($params=null){
        return $this->json_response('ok', 200);
    }

    public function delete($params=null){
       return $this->json_response('ok', 200);
    }

}
