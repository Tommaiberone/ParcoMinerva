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
            $email = $_GET['email'];
            $nome = $_GET['nome'];
            $auguri = $_GET['auguri'];

            //Include required PHPMailer files
                require 'PHPMailer/PHPMailer.php';
                require 'PHPMailer/SMTP.php';
                require 'PHPMailer/Exception.php';
            //Define name spaces
                use PHPMailer\PHPMailer;
                use PHPMailer\SMTP;
                use PHPMailer\Exception;
            //Create instance of PHPMailer
                $mailer = new PHPMailer();
            //Set mailer to use smtp
                $mailer->isSMTP();
            //Define smtp host
                $mailer->Host = "smtp.gmail.com";
            //Enable smtp authentication
                $mailer->SMTPAuth = true;
            //Set smtp encryption type (ssl/tls)
                $mailer->SMTPSecure = "tls";
            //Port to connect smtp
                $mailer->Port = "587";
            //Set gmail username
                $mailer->Username = "parcominerva2021@gmail.com";
            //Set gmail password
                $mailer->Password = "ParcoDellaMinerva2021";
            //Email subject
                $mailer->Subject = "I tuoi biglietti!";
            //Set sender email
                $mailer->setFrom('Parco della Minerva');
            //Enable HTML
                $mailer->isHTML(true);
            //Email body
                $mailer->Body = "<h1>Ciao, " . $nome . " </h1></br><p>Ecco a te i tuoi biglietti</p>";
            //Add recipient
                $mailer->addAddress("$email");
            //Finally send email
                if ( !($mailer->send()) )
                    echo "Message could not be sent. Mailer Error: "{$mail->ErrorInfo};
            //Closing smtp connection
                $mail->smtpClose();

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