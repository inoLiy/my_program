<?php

include "conn.php";
$num =$_GET['num'];

if($num == 1){
    $result = $conn->query("select * from type");
    $yhddata = array();
    for($i = 0;$i<$result->num_rows;$i++){
    $yhddata[$i]=$result->fetch_assoc();
    };
    echo json_encode($yhddata);
}else if($num == 2){
    $result = $conn->query("select * from list");
    $yhddata = array();
    for($i = 0;$i<$result->num_rows;$i++){
    $yhddata[$i]=$result->fetch_assoc();
    };
    echo json_encode($yhddata);
}else if($num == 3){
    $result = $conn->query("select * from rank");
    $yhddata = array();
    for($i = 0;$i<$result->num_rows;$i++){
    $yhddata[$i]=$result->fetch_assoc();
    };
    echo json_encode($yhddata);
}else if($num==4){
    $result = $conn->query("select * from liushi");
    $yhddata = array();
    for($i = 0;$i<31;$i++){
    $yhddata[$i]=$result->fetch_assoc();
    };
    echo json_encode($yhddata);
}else if($num==5){
    $result = $conn->query("select * from lunbo");
    $yhddata = array();
    for($i = 0;$i<4;$i++){
    $yhddata[$i]=$result->fetch_assoc();
    };
    echo json_encode($yhddata);
}

