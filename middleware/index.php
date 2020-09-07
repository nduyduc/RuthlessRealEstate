<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$root = $_SERVER["DOCUMENT_ROOT"];
include "database.php";
include "json_web_token.php";
include $root."/private/domain.php";

$db = new Database();

$username = null;

$access_token = null;

$token_info = null;

if (key_exists("auth_token", $_COOKIE)) {
    $token = $_COOKIE["auth_token"];
    $check = token_verify($token);
    if ($check["valid"]) {
        $access_token = $token;
        $username = token_decode($token)["username"];
        if ($check["regen_required"]) {
            $access_token = token_gen($username);
        }
    }
}

$request_data = null;
switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        $request_data = $_POST;
        break;
    case "GET":
        $request_data = $_GET;
        break;
}

if ($username == null && key_exists("auth_credentials", $request_data)) {
    $credential = json_decode($request_data["auth_credentials"], 1);
    if ($credential && key_exists("username", $credential) && key_exists("password", $credential)) {
        $username = $credential["username"];
        $password = $credential["password"];
        $auth_query = $db->prepare("select username, password_hash from agent where username=:username");
        $auth_query->execute(array(":username" => $username));
        $result = $auth_query->fetchAll();
        if (count($result) > 0) {
            $result = $result[0];
            $password_hash = $result["password_hash"];
            if (password_verify($password, $password_hash)) {
                $access_token = token_gen($username);
            } else {
                $username = null;
            }
        } else {
            $username = null;
        }
    }
}

$access_api = preg_match("/^\/api(\/.+\.php(\?.+)?)?$/", $_SERVER["REQUEST_URI"]);

if ($username == null) {
    if ($access_api) {
        http_response_code(401);
        exit(0);
    }
} else {
    $token_info = token_decode($access_token);
    setcookie("auth_token", $access_token, $token_info["expired_time"]);
    if ($access_api) {
        header("Content-Type: application/json; charset=UTF-8");
    }
}
