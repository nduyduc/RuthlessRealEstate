<?php

$root = $_SERVER["DOCUMENT_ROOT"];
include_once $root."/middleware/index.php";

$data = array("test" => true, "list_property" => ["abc", "xyz"]);

echo json_encode($data);

