<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
require_once('Config.php');


class Template
{
    private static $Template;
    private $loader;
    private $twig;
 
    private function __construct($debug=false){
        $config = Config::getInstance();
        $templateFolder = $config->getSetting('templates');
        $this->loader = new Twig_Loader_Filesystem(__DIR__.$templateFolder['core']);
        $this->twig = new Twig_Environment($this->loader, array('debug' => $debug));
    }

    public static function getInstance(){ 
        if (!isset(self::$Template)) {
            self::$Template = new Template();
        } 
        return self::$Template->twig;        
    }

    public function __clone(){ 
        throw new Exception("Cannot clone object"); 
    }

    public function __wakeup(){
        throw new Exception("Cannot unserialize singleton");
    }

}
