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

        <!-- Navigation bar -->
        <script src="../js/Top_bar.js"></script>

        
        <?php 
            // verifica che sia stato passato un nome alla pagina bentornato.php, altrimenti reindirizza a login.html
            if (! (isset($_GET['name'])))
                header("Location: ../login.html");
        ?>

        <div class = "container-messages container border border-primary border-2 text-center">
            <?php 
                $nome = $_GET['name'];
                echo "<h2 class='text-center main-title'> Bentornato <i class='text-primary'>$nome</i></h2>"
            ?>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary btn-block rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    style="height: 60px; width: 400px; margin-top: 30px;">
                <h4>Compra subito i biglietti!</h4>
            </button>

            <br><br><br><br><br><br>
            <h4 class = 'text-center'>
                <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"><b><u>Torna alla home</u></b></a>
            </h4>
            
        </div>
            
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-2" 
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                <div class="modal-content rounded border border-primary border-3" style="border-radius: 35px !important;">

                    <div class="modal-header">
                        <h3 class="modal-title">Attenzione!</h3>
                    </div>

                    <div class="modal-body text-center">
                        Sei sicuro di voler tornare alla Home? Dovrai effettuare nuovamente il login per acquistare i biglietti.
                    </div>

                    <div class="modal-footer">
                        <a type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal" style="width=1000px !important;">Indietro</a>
                        <a type="button" class="btn btn-primary rounded-pill" href="../../index/index.html">... Alla Home!</a>
                    </div>
                    
                </div>
            </div>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" 
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                <div class="modal-content rounded border border-primary border-3" style="border-radius: 35px !important;">

                    <div class="modal-header">
                        <h3 id="modal-title1" class="modal-title">Acquista i tuoi biglietti</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body text-center">

                        <form class="ticket-type" action="" method="post">
                            
                            <div class="biglietto"> 10€ Biglietto Base l Divertimento assicurato!
                                <div class="range-container">
                                    <input type="range" class="form-range" value="0" min="0" max="10" id="customRange1" 
                                        onchange="update(this.value, 1);"> 
                                    <span class="range-value" id="range-value1"> 0 </span>
                                </div>
                            </div>

                            <div class="biglietto"> 12€ Biglietto Base+ l Senza limiti!
                                <div class="range-container">
                                    <input type="range" class="form-range" value="0" min="0" max="10" id="customRange2" 
                                        onchange="update(this.value, 2);"> 
                                    <span class="range-value" id="range-value2"> 0 </span>
                                </div>
                            </div>

                            <div class="biglietto"> 16€ Biglietto VIP l Nessun compromesso!
                                <div class="range-container">
                                    <input type="range" class="form-range" value="0" min="0" max="10" id="customRange3" 
                                        onchange="update(this.value, 3);"> 
                                    <span class="range-value" id="range-value3"> 0 </span>
                                </div>
                            </div>

                            <div class="biglietto"> 100€ Abbonamento annuale l Per gli affezionati
                                <div class="range-container">
                                    <input type="range" class="form-range" value="0" min="0" max="10" id="customRange4" 
                                            onchange="update(this.value, 4);"> 
                                    <span class="range-value" id="range-value4"> 0 </span>
                                </div>
                            </div>
                            
                            <br><h3 class="totale">
                                Totale = 
                                <span id=importo-totale>0</span>
                                €
                            </h3>
    
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Indietro</button>
                        <button type="button" class="btn btn-primary rounded-pill">Acquista ora!</button>
                    </div>
                    
                </div>
            </div>
        </div>

        <!-- Optional JS scripts-->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src = "../../js/global.js" async></script>
        <script src = "../register.js"></script>

        <!-- Bootstrap JS bundle (Popper included) [Chiedere a Rosati se va bene importare il bundle invece dei due separati] -->
        <script src = "../../js/bootstrap.bundle.js"></script>
    </body>
</html>