<?php

include "conn.php";
// $num = $_GET[""]
$result = $conn->query("select * from details");
    $details = array();
    for($i = 0;$i<$result->num_rows;$i++){
    $details[$i]=$result->fetch_assoc();
    };
    echo json_encode($details);