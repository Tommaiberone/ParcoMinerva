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
            //Include required PHPMailer files
            require './Mailer/PHPMailer.php';
            require './Mailer/SMTP.php';
            require './Mailer/Exception.php';

            //Define name spaces
            use PHPMailer\PHPMailer\PHPMailer;
            use PHPMailer\PHPMailer\SMTP;
            use PHPMailer\PHPMailer\Exception;

            $name = $_GET['name'];
            $biglietto_base = $_POST['biglietto_base'];
            $biglietto_base_plus = $_POST['biglietto_base_plus'];
            $biglietto_VIP = $_POST['biglietto_VIP'];
            $abbonamento_annuale = $_POST['abbonamento_annuale'];
            @$data = $_POST['data'];
            @$intestatario = $_POST['NomeIntestatario'];
            @$auguri = $_POST['messaggioAuguri'];

            if(!isset($intestatario))
                $email = $_GET['email'];
            else
                $email = $_POST['emailIntestatario'];


            //Create instance of PHPMailer
                $mail = new PHPMailer();

            //Set mailer to use smtp
                $mail->isSMTP();

            //Define smtp host
                $mail->Host = "smtp.gmail.com";

            //Enable smtp authentication
                $mail->SMTPAuth = true;

            //Set smtp encryption type (ssl/tls)
                $mail->SMTPSecure = "tls";

            //Port to connect smtp
                $mail->Port = "587";

            //Set gmail username
                $mail->Username = "parcominerva2021@gmail.com";

            //Set gmail password
                $mail->Password = "ParcoDellaMinerva2021";

            //Email subject
                $mail->Subject = "I tuoi biglietti!";

            //Set sender email
                $mail->setFrom('parcominerva2021@gmail.com');

            //Enable HTML
                $mail->isHTML(true);

            //Email body

                // Genero i codici dei biglietti
                $biglietto_base_codici = array();
                $biglietto_base_plus_codici = array();
                $biglietto_VIP_codici = array();
                $abbonamento_annuale_codici = array();

                for ($i=0; $i<$biglietto_base; $i++) {
                    array_push($biglietto_base_codici, substr(md5 (rand ()), 0, 7));
                }
                for ($i=0; $i<$biglietto_base_plus; $i++) {
                    array_push($biglietto_base_plus_codici, substr(md5 (rand ()), 0, 7));
                }
                for ($i=0; $i<$biglietto_VIP; $i++) {
                    array_push($biglietto_VIP_codici, substr(md5 (rand ()), 0, 7));
                }
                for ($i=0; $i<$abbonamento_annuale; $i++) {
                    array_push($abbonamento_annuale_codici, substr(md5 (rand ()), 0, 7));
                }


                if(isset($intestatario))
                    $mail->Body = "<h1>Ciao, " . $intestatario . " </h1></br><p>" . $name . " ti ha regalato dei biglietti! </p> <p>" . $auguri . "</p>" . 
                                  "<p>Buon divertimento!</p><br><br>"
                                  
                                  . "<p><br>Biglietti base: " . $biglietto_base . ", con data: " . $data 
                                  . "</p><p> Codici: " . implode(" - ",$biglietto_base_codici)
              
                                  . "</p><br><p>Biglietti base +: " . $biglietto_base_plus
                                  . "</p><p> Codici: " . implode(" - ",$biglietto_base_plus_codici)
              
                                  . "</p><br><p>Biglietti VIP: " . $biglietto_VIP
                                  . "</p><p> Codici: " . implode(" - ",$biglietto_VIP_codici)
              
                                  . "</p><br><p>Abbonamenti annuali: " . $abbonamento_annuale
                                  . "</p><p> Codici: " . implode(" - ",$abbonamento_annuale_codici);

                else
                    $mail->Body = "<h1>Ciao, " . $name . " </h1></br><p>Ecco a te i tuoi biglietti: </p>" 

                    . "<p><br>Biglietti base: " . $biglietto_base . ", con data: " . $data 
                    . "</p><p> Codici: " . implode(" - ",$biglietto_base_codici)

                    . "</p><br><p>Biglietti base +: " . $biglietto_base_plus
                    . "</p><p> Codici: " . implode(" - ",$biglietto_base_plus_codici)

                    . "</p><br><p>Biglietti VIP: " . $biglietto_VIP
                    . "</p><p> Codici: " . implode(" - ",$biglietto_VIP_codici)

                    . "</p><br><p>Abbonamenti annuali: " . $abbonamento_annuale
                    . "</p><p> Codici: " . implode(" - ",$abbonamento_annuale_codici);
                    

            //Add recipient
                $mail->addAddress("$email");

            //Finally send email
                if ( !($mail->send()) )
                    echo "Message could not be sent. Mailer Error: "($mail->ErrorInfo);

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