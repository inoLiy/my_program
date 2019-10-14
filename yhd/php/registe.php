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


