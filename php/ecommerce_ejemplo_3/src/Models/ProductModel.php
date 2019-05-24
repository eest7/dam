<?php
require_once(__DIR__.'/../../core/Controller.php');
require_once(__DIR__.'/../../core/Db.php');


/**
* Class ProductModel
*/
class ProductModel
{
    public $id;
    public $name;
    public $quantity;
    public $price;
    public $product_type_id;
    public $active;

    public function get($id)
    {
        $dbObj = Db::getInstance();
        $query = $dbObj->getQuery("SELECT * FROM product WHERE id=:id");
        $query->execute(array(":id" => $id));
        $product = $query->fetchObject('ProductModel');
        return $product;
    }
    
    public function getAll()
    {
        // agregar logica de paginado
        $dbObj = Db::getInstance();
        $query = $dbObj->getQuery("SELECT * FROM product");
        $query->execute();
        $data = array();
        while ($obj = $query->fetchObject('ProductModel')) {
            $data[] = $obj;
        }
        return $data;
    }

    public function insert($name, $quantity, $price, $product_type_id, $active=1)
    {
        $dbObj = Db::getInstance();
        $insert = "INSERT INTO product (name, quantity, price, product_type_id, active)"
                  ."VALUES(:name, :quantity, :price, :product_type_id, :active)";
        $query = $dbObj->getQuery($insert);
        $query->execute(array(
            ":name" => $name,
            ":quantity" => $quantity,
            ":price" => $price,
            ":product_type_id" => $product_type_id,
            ":active" => $active
        ));
        return $this->getUser($dbObj->getLastInsertedId());
    }

    public function update($id, $name, $quantity, $price, $product_type_id, $active=1)
    {
        $dbObj = Db::getInstance();
        $update = "UPDATE product SET "
                  ."name = :name , quantity = :quantity ,"
                  ."price = :price , product_type_id = :product_type_id,"
                  ."active = :active"
                  ."WHERE id = :id";
        $query = $dbObj->getQuery($update);
        $query->execute(array(
            ":id" => $id,
            ":name" => $name,
            ":quantity" => $quantity,
            ":price" => $price,
            ":product_type_id" => $product_type_id,
            ":active" => $active
        ));
        return $this->getUser($id);
    }

    public function delete($id)
    {
        $dbObj = Db::getInstance();
        $delete = "DELETE FROM product WHERE id = :id";
        $query = $dbObj->getQuery($delete);
        if($query->execute(array(":id" => $id))){
          return TRUE;
        }
        return FALSE;
    }

}
