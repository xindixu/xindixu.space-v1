<html>
    <head></head>
    <body>
<?php
    $expire_time = time() + 60 * 60 * 24 * 365; // 1 ye
    setcookie( 'user_is_admin', 'true', $expire_time, '/' );
?>
        <script>
        console.log("just set your cookie!!!!")
        </script>
        </body>
</html>