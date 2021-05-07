<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>PDM - Registrazione</title> 

        <link rel="stylesheet" href="../css/bootstrap.css">
        <link rel="stylesheet" type = "text/css" href = "../css/global.css">
        <link rel="stylesheet" href="login-register.css">

    </head>

    <body>
        <?php
            $dbconn = pg_connect("  host = localhost
                                    port = 5432
                                    dbname = PDM
                                    user = postgres
                                    password = 1234") 
                                    or die ("Impossibile connettersi: " . pg_last_error());
            if (!isset($_POST['submit']))
                header("Location: ../index/index.html");
            else {
                $email= $_POST['email'];
                $verifica_email= "select * from utente where email = $1";
                $result = pg_query_params($dbconn, $verifica_email, array($email));
                if (pg_fetch_array($result, null, PGSQL_ASSOC))
                    echo "beshtia";
                else {
                    $username= $_POST['username'];
                    $password= md5($_POST['password']);
                    $email= $_POST['email'];
                    $inserimento= "insert into utente values ($1,$2,$3)";
                    $result = pg_query_params($dbconn, $inserimento, 
                              array($username, $password, $email));
                }
            }
                                    

        ?>
    </body>
</html>