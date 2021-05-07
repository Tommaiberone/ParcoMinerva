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
            // Connessione al DB
            $dbconn = pg_connect("  host = localhost
                                    port = 5432
                                    dbname = PDM
                                    user = postgres
                                    password = 1234") 
                                    or die ("Impossibile connettersi: " . pg_last_error());

            //se non è stato premuto il bottone submitButton
            if (!isset($_POST['submitButton']))
                header("Location: ./register.html");

            //se submitButton è stato premuto, verifica che non esista già nome utente o email nel DB
            else {
                $email = $_POST['inputEmail'];
                $q1 = "select * from utente where email = $1";
                $result = pg_query_params($dbconn, $q1, array($email));

                //se email già presente nel DB
                if ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
                    echo "  <br><br><br><br><br><br>
                            <h1 class = 'text-center'> Sei già registrato, clicca <a href = './login.html'><b>qui</b></a> per accedere. </h1>";

                //se email non presente nel DB
                else {
                    $username= $_POST['inputUsername'];
                    $q2 = "select * from utente where username = $1";
                    $result = pg_query_params($dbconn, $q2, array($username));

                    // se nome utente già esistente, sceglierne un altro
                    if ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
                        echo "  <br><br><br><br><br><br>
                                <h1 class = 'text-center'> Il nome utente esiste già, clicca <a href = './register.html'><b>qui</b></a> per sceglierne un altro. </h1>";                    
                    
                    //se invece il nome utente non esiste già -- tutto corretto, l'utente verrà registrato
                    else{
                        $password= md5($_POST['inputPassword']);
                        $email= $_POST['inputEmail'];
                        $q3 = "insert into utente values ($1,$2,$3)"; //RICORDA: email, username, password in questo esatto ordine nel database
                        $result = pg_query_params($dbconn, $q3, 
                                array($email, $username, $password));
                        if ($result){
                            header("Location: ./benvenuto.php?name=$username");
                        }
                    }
                }
            }
        ?>
    </body>
</html>