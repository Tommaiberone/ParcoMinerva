<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>PDM - Registrazione</title> 

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

            //se non è stato premuto il bottone submitButton
            if (!isset($_POST['submitButton']))
                header("Location: ../register.html");

            //se submitButton è stato premuto, verifica che non esista già nome utente o email nel DB
            else {
                $email = $_POST['inputEmail'];
                $q1 = "select * from utente where email = $1";
                $result = pg_query_params($dbconn, $q1, array($email));

                //se email già presente nel DB
                if ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
                    echo    "<br><br><br><br><br>
                            <div class = 'container-messages container border border-primary border-2'>
                                <h2 class = 'text-center'> Questa e-mail risulta già registrata   </h2>
                                <a type='button' class='solution btn-primary rounded-pill text-center' href = '../login.html'><b>Accedi subito</b></a>
                                <br><br><br><br>
                                <h4 class = 'text-center'><a href = '../../index/index.html'><b>Torna alla home</b></h4>
                            </div>";
                
                    

                //se email non presente nel DB
                else {
                    $username= $_POST['inputUsername'];
                    $q2 = "select * from utente where username = $1";
                    $result = pg_query_params($dbconn, $q2, array($username));

                    // se nome utente già esistente, sceglierne un altro
                    if ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
                        echo    "<br><br><br><br><br>
                                <div class = 'container-messages container border border-primary border-2'>
                        
                                    <h2 class = 'text-center'> Il nome utente è stato già utilizzato </h2>
                                    <a type='button' class='solution btn-primary rounded-pill text-center' href = '../register.html'><b>Scegline un'altro</b></a>
                                    
                                    <br><br><br><br>
                                    <h4 class = 'text-center'>
                                        <a href = '../../index/index.html'><b>Torna alla home</b></a>
                                    </h4>
                                </div>";
                                            
                    
                    //se invece il nome utente non esiste già -- tutto corretto, l'utente verrà registrato
                    else{
                        
                        $password= md5($_POST['inputPassword']);
                        $email= $_POST['inputEmail'];
                        $q3 = "insert into utente values ($1,$2,$3)"; //RICORDA: email, username, password in questo esatto ordine nel database
                        $result = pg_query_params($dbconn, $q3, 
                                array($email, $username, $password));
                        if ($result){
                            header("Location: benvenuto.php?name=$username");
                        }
                    }
                }
            }
        ?>
    </body>
</html>