<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
require_once('Config.php');


class Db
{
    private static $Db;
    private $ObjPDO;
 
    private function __construct(){
        $config = Config::getInstance();
        $databaseSetting = $config->getSetting('database');
        try { 
            $this->ObjPDO = new PDO(
                $databaseSetting['dsn'].':host='.$databaseSetting['host'].';dbname='.$databaseSetting['database'].';charset='.$databaseSetting['charset'],
                $databaseSetting['user'],
                $databaseSetting['password'],
                array(
                    PDO::ATTR_EMULATE_PREPARES => false,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                )
            );
            $this->ObjPDO->exec("SET CHARACTER SET ".$databaseSetting['charset']);
        } catch (PDOException $e) { 
            print "Error!: " . $e->getMessage(); 
            die();
        }
    }

    public static function getInstance(){ 
        if (!isset(self::$Db)) {          
            self::$Db = new Db(); 
        } 
        return self::$Db;        
    }

    public function __clone(){ 
        throw new Exception("Cannot clone object"); 
    }

    public function __wakeup(){
        throw new Exception("Cannot unserialize singleton");
    }
 
    public function getQuery($sql){ 
        return $this->ObjPDO->prepare($sql); 
    }
    
    public function getLastInsertedId(){ 
        return $this->ObjPDO->lastInsertId(); 
    }

}
