<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>PDM - Accesso</title> 

        <link rel="stylesheet" href="../../css/bootstrap.css">
        <link rel = "stylesheet" type = "text/css" href = "../../css/global.css">
        <link rel="stylesheet" href="../login-register.css">

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

            // se loginButton non è stato premuto, torna indietro
            if (! (isset($_POST['loginButton'])))
                header("Location: ../login.html");

            //se loginButton è stato premuto, verifica che esistano le entry nel DB
            else {
                $email = $_POST['inputEmail'];
                $ricordati = $_POST['ricordati'];
                $q1 = "select * from utente where email = $1";
                $result = pg_query_params($dbconn, $q1, array($email));
                
                //se email non è nel DB
                if (! ($line = pg_fetch_array($result, null, PGSQL_ASSOC))) {
                    echo "  <br><br><br><br>
                            <h1 class = 'text-center'> Non sei registrato, clicca <a href = '../register.html'><b>qui</b></a> per registrarti. </h1>";
                }

                //se email è nel DB
                else{
                    $password = md5($_POST['inputPassword']);
                    $q2 = "select * from utente where email = $1 and pw = $2";
                    $result = pg_query_params($dbconn, $q2, array($email, $password));

                    //se password non corrisponde nel DB 
                    if (! ($line = pg_fetch_array($result, null, PGSQL_ASSOC))){
                        echo "  <br><br><br><br><br><br>
                                <h1 class = 'text-center'> La password inserita non è corretta, <a href = '../login.html'><b>clicca qui per reinserirla</a>. </h1>";
                    }

                    //se password corrisponde nel DB
                    else {
                        $nome = $line['username'];
                        header("Location: bentornato.php?name=$nome&email=$email&ricordati=$ricordati");
                    }
                }
            }
        ?>
    </body>&