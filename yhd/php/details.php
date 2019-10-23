<?php

include "conn.php";
// $num = $_GET[""]
if(isset($_GET['id'])){
    $id = $_GET['id'];
    $result = $conn->query("select * from details where sid=$id");
    $details = $result->fetch_assoc();
    echo json_encode($details);
    
    
}else{
    exit('非法操作');
}
