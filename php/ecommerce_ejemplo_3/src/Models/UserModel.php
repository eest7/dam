<?php
require_once(__DIR__.'/../../core/Controller.php');
require_once(__DIR__.'/../../core/Db.php');


/**
* Class UserModel
*/
class UserModel
{
	public $id;
    public $username;
    public $password;
    public $user_type_id;
    public $active;

    public function get($id)
    {
        $dbObj = Db::getInstance();
        $query = $dbObj->getQuery("SELECT * FROM user WHERE id=:id");
        $query->execute(array(":id" => $id));
        $user = $query->fetchObject('UserModel');
        return $user;
    }
    
    public function getAll()
    {
    	// agregar logica de paginado
        $dbObj = Db::getInstance();
        $query = $dbObj->getQuery("SELECT * FROM user");
        $query->execute();
        $data = array();
        while ($obj = $query->fetchObject('UserModel')) {
            $data[] = $obj;
        }
        return $data;
    }

    public function insert($username, $password, $user_type_id)
    {
        $dbObj = Db::getInstance();
        $insert = "INSERT INTO user (username, password, user_type_id)"
                  ."VALUES(:username, :password, :user_type_id)";
        $query = $dbObj->getQuery($insert);
        $query->execute(array(
        	":username" => $username,
        	":password" => $password,
        	":user_type_id" => $user_type_id
        ));
        return $this->getUser($dbObj->getLastInsertedId());
    }

    public function update($id, $username, $password, $user_type_id, $active=true)
    {
        $dbObj = Db::getInstance();
        $update = "UPDATE user SET "
                  ."username = :username , password = :password ,"
                  ."user_type_id = :user_type_id , active = :active "
                  ."WHERE id = :id";
        $query = $dbObj->getQuery($update);
        $query->execute(array(
        	":username" => $username,
        	":password" => $password,
        	":user_type_id" => $user_type_id,
        	":active" => $active,":id" => $id
        ));
        return $this->getUser($id);
    }

    public function delete($id)
    {
        $dbObj = Db::getInstance();
        $delete = "DELETE FROM user WHERE id = :id";
        $query = $dbObj->getQuery($delete);
        if($query->execute(array(":id" => $id))){
          return TRUE;
        }
        return FALSE;
    }

}
