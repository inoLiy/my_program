<?php

include "conn.php";

    $sid = $_GET['id'];
    $cart = array();
    for($i = 0;$i<count($sid);$i++){
        $id = $sid[$i];
        $result = $conn->query("select * from details where sid=$id");
        $cart[$i] = $result->fetch_assoc();
    };
    echo json_encode($cart);
