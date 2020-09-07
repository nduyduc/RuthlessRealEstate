<?php
class Database extends PDO {
    function __construct() {
        $root = $_SERVER["DOCUMENT_ROOT"];
        include $root."/private/connection.php";
        $dns = "mysql:host=$HOST;dbname=$DB_NAME";
        parent::__construct($dns, $DB_USER, $DB_PWD, array(
            PDO::ATTR_EMULATE_PREPARES => false
        ));
    }
}