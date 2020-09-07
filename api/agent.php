<?php
$root = $_SERVER["DOCUMENT_ROOT"];
include_once $root."/middleware/index.php";

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $info_query = $db->prepare("
        select f_name as familly_name, g_name as given_name, username, contact
        from agent
        where username = :username
    ");
    $info_query->execute(array(":username" => $username));
    echo json_encode($info_query->fetch(PDO::FETCH_ASSOC));
    $info_query->closeCursor();
}