<!DOCTYPE html>
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
            // verifica che sia stato passato un nome alla pagina benvenuto.php, altrimenti reindirizza a register.html
            if (! (isset($_GET['name'])))
                header("Location: ../register.html");
        ?>

        <div class = "container-messages container border border-primary border-2 text-center">
            <?php 
                $nome = $_GET['name'];
                echo "<h2 class='text-center main-title'> Benvenuto <i class='text-primary'>$nome</i></h2>
                      <h3 class = 'text-center'> Clicca sul bottone seguente per accedere </h3>";
            ?>
            <a href = "../login.html" class="btn btn-primary btn-block rounded rounded-2">Accedi</a>
        </div>


        <!-- Optional JS scripts-->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src = "../js/global.js" async></script>
        <script src = "register.js"></script>

        <!-- Bootstrap JS bundle (Popper included)-->
        <script src = "../js/bootstrap.bundle.js"></script>
    </body>
</html>