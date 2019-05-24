<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
require_once('Config.php');


class File {

    private $path;

    private function __construct() {
        $config = Config::getInstance();
        $this->path = $config->getSetting('upload_folder');
    }

    public static function Upload($filename=null){
        $target_dir = $this->path;
        $target_file = NULL;
        if($filename){
          $target_file = $target_dir . basename($filename.$_FILES["fileToUpload"]["name"]);
        }else{
          $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
        }
        $uploadOk = 1;
        $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
            if($check !== false) {
                //echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                //echo "File is not an image.";
                $uploadOk = 0;
            }
        }

        // Check if file already exists
        if (file_exists($target_file)) {
            //echo "Sorry, file already exists.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 500000) {
            //echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }

        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif" ) {
            //echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }
        
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            return FALSE;
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                return TRUE;
            } else {
                return FALSE;
            }
        }
    }


    public static function WriteAnObject($filename,$obj){
        $file = fopen($this->path.$filename, "a+");  
        $action = fwrite($file, $obj->ToString());
        fclose($file);
        return $action ? TRUE : FALSE;
    }

    public static function WriteAnString($filename,$str){
        $file = fopen($this->path.$filename, "a+");  
        $action = fwrite($file, $str);
        fclose($file);
        return $action ? TRUE : FALSE;
    }

    public static function WriteAnArray($filename,$list){
        $newList = '';
        foreach ($list as $key => $value) {
            $newLine = '';
            $valueCount = count($value);
            for ($i=0; $i < $valueCount; $i++) {
                if($i==$valueCount-1){
                    $newLine.= $value[$i];
                }else{
                    $newLine.= $value[$i].'-';
                }
            }
            $newList .= $newLine."\r\n";
        }
        $file = fopen($this->path.$filename, "w+");  
        $action = fwrite($file, $newList);
        fclose($file);
        return $action ? TRUE : FALSE;
    }

    public static function ReadFile($filename){
        $file_content = array();
        $file = fopen($this->path.$filename, "r");
        while(!feof($file))
        {
            $file_line = fgets($file);
            $line = explode("-", str_replace(["\r","\n"],'',$file_line));
            $file_content[] = $line;
        }
        fclose($file);
        return $file_content;
    }

    public static function Delete($path){
        return unlink($path);
    }

    public static function Move($pathOrigen, $pathDestino){
        return copy($pathOrigen, $pathDestino);
    }

}
