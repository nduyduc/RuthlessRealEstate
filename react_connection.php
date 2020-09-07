<?php
    if ($_SERVER["REQUEST_URI"] === "/react_connection.php") {
        header("Location: /");
        exit();
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Ruthless real estate</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
</body>
</html>