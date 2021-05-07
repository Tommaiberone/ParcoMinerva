<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>PDM - Registrazione</title>

        <link rel="stylesheet" href="../css/bootstrap.css">
        <link rel = "stylesheet" type = "text/css" href = "../css/global.css">
        <link rel="stylesheet" href="login-register.css">

    </head>

    <body>
        <?php
            $dbconn = pg_connect("host = localhost
                                port = 5432
                                dbname = PDM
                                user = postgres
                                password = 1234") 
                                or die ("Impossibile connettersi: " .pg_last_error());
        ?>

        












    </body>