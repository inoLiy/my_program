<?php

include "conn.php";
if(isset($_POST['name'])){
    $name = @$_POST['name'];//@容错
    $result = $conn->query("select * from registe where name='$name'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}

if(isset($_POST['phone'])){
    $phone = @$_POST['phone'];//@容错
    $result = $conn->query("select * from registe where phone='$phone'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}

if(isset($_POST['mingzi'])){
    $name = @$_POST['mingzi'];//@容错
    $phone = @$_POST['shouji'];//@容错
    $password = sha1(@$_POST['mima']);
    $result = $conn->query("insert registe(name,phone,password) VALUES('$name','$phone','$password')");
    echo 1;
}


