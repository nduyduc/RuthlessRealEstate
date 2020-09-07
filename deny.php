<?php
$deny_pattern = "/^\/((private|middleware)\/.*)|deny\.php$/";

if (preg_match($deny_pattern, $_SERVER["REQUEST_URI"])) {
    http_response_code(404);
    exit(0);
}