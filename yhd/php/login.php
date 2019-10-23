<?php

include "conn.php";
    $name = $_POST['user'];
    $password = sha1($_POST['pswd']);
    $result = $conn->query("select * from registe where name='$name'and password='$password'");
    
    if($result->fetch_assoc()){
        
        echo $name;
        echo false;
    }
