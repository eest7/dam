<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Exception\ParseException;

class Config
{
    private static $Config;
    private $settingFile;
 
    private function __construct() {
        try {
            $this->settingFile = Yaml::parseFile(__DIR__.'/../settings.yml');
        } catch (ParseException $exception) {
            printf('Unable to parse the YAML string: %s', $exception->getMessage());
        }
    }

    public static function getInstance(){ 
        if (!isset(self::$Config)) {          
            self::$Config = new Config(); 
        } 
        return self::$Config;        
    }

    public function getSetting($key) { 
        return array_key_exists($key, $this->settingFile) ? $this->settingFile[$key] : NULL;        
    }

    public function __clone() { 
        throw new Exception("Cannot clone object"); 
    }

    public function __wakeup() {
        throw new Exception("Cannot unserialize singleton");
    }

}
