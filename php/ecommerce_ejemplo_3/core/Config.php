<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */


class Config
{
    private static $Config;
    private $settingFile;
 
    private function __construct() {
        try {
            $this->settingFile = json_decode(
                file_get_contents(__DIR__.'/settings.json'), true);
        } catch (Exception $exception) {
            printf('Unable to parse the Json string: %s',
                $exception->getMessage());
        }
    }

    public static function getInstance(){ 
        if (!isset(self::$Config)) {          
            self::$Config = new Config(); 
        }
        return self::$Config;        
    }

    public function getSetting($key) {
        return array_key_exists(
            $key,
            $this->settingFile) ? $this->settingFile[$key] : NULL;        
    }

    public function __clone() { 
        throw new Exception("Cannot clone object"); 
    }

    public function __wakeup() {
        throw new Exception("Cannot unserialize singleton");
    }

}
