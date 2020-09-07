<?php
include_once "../middleware/index.php";

if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $info_query = $db->prepare ("
        SELECT * 
        FROM client
    ");
    $info_query->execute()        ;
    echo json_encode($info_query->fetch());
    $info_query->closeCursor();
}