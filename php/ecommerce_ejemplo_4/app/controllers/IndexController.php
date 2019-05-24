<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
require_once(__DIR__.'/../core/Controller.php');
require_once(__DIR__.'/../core/Template.php');

class IndexController extends Controller {

    public function get($params=null) {
        $template = Template::getInstance();
        return $template->render(
            'index.html',
            array('firstname' => 'nicolas', 'lastname' => 'cuevas'));
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
