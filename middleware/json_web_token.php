<?php
$root = $_SERVER["DOCUMENT_ROOT"];
include $root."/private/secret.php";

$TOKEN_DURATION = 60 * 60 * 5;
$TOKEN_REGEN_OFFSET = 60 * 60 * 2;

function token_decode($token) {
    list($payload, $signature) = explode(".", $token, 2);
    return json_decode(base64_decode($payload), true);
}

function payload_encode($payload) {
    return base64_encode(json_encode($payload));
}

function payload_hash($payload) {
    global $TOKEN_SECRET;
    return hash_hmac("sha256", $payload, $TOKEN_SECRET);
}

function token_verify($token) {
    list($payload, $signature) = explode(".", $token, 2);
    $valid = payload_hash($payload) == $signature;
    $regen_required = false;
    if ($valid) {
        $current_time = time();
        $payload = token_decode($token);
        if ($current_time <= $payload["expired_time"]) {
            $valid = true;
        }
        if ($current_time >= $payload["regen_time"]) {
            $regen_required = true;
        }
    }
    return array(
        "valid" => $valid,
        "regen_required" => $regen_required
    );
}

function token_sign($payload) {
    return $payload.".".payload_hash($payload);
}

function token_gen($username) {
    global $TOKEN_DURATION, $TOKEN_REGEN_OFFSET;
    $expired_time = time() + $TOKEN_DURATION;
    $regen_time = $expired_time - $TOKEN_REGEN_OFFSET;
    $payload = payload_encode(array( 
        "username" => $username,
        "expired_time" => $expired_time,
        "regen_time" => $regen_time
    ));
    return token_sign($payload);
}