<!DOCTYPE html>
<html lang="en">

    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title> PDM - Accesso </title>

        <link rel="stylesheet" href="../../css/bootstrap.css">
        <link rel = "stylesheet" type = "text/css" href = "../../css/global.css">
        <link rel="stylesheet" href="../login-register.css">

    </head>
    
    <body>

        <br><br><br><br><br>
        <h1 class="text-center">Grazie per aver acquistato da noi! I biglietti verranno inviati per email.</h1>
        <h1 class="text-center">Ti aspettiamo al nostro parco divertimenti!</h1>

        <br><br><br><br><br>

        <?php
            $email = $_GET['name'];
            
            
            //mailer here

        ?>


        <h2 class = 'text-center' style="color: #007bff;">
            <a type="button" href="../../index/index.html"><b><u>Torna alla home</u></b></a>
        </h2>

        <!-- Optional JS scripts-->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src = "../js/global.js" async></script>

        <!-- Bootstrap JS bundle (Popper included) [Chiedere a Rosati se va bene importare il bundle invece dei due separati] -->
        <script src = "../js/bootstrap.bundle.js"></script>
    </body>
</html>