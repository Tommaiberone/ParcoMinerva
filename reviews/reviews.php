<!DOCTYPE html>
<html lang="en">
    <head>
        
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <link rel="stylesheet" href="../../css/bootstrap.css">

    </head>

    <body>

        <?php

            // Converte una data in tempo trascorso
            function time_elapsed_string($datetime, $full = false) {
                $now = new DateTime;
                $ago = new DateTime($datetime);
                $diff = $now->diff($ago);
                $diff->w = floor($diff->d / 7);
                $diff->d -= $diff->w * 7;
                $string = array('y' => 'year', 'm' => 'month', 'w' => 'week', 'd' => 'day', 'h' => 'hour', 'i' => 'minute', 's' => 'second');
                foreach ($string as $k => &$v) {
                    if ($diff->$k) {
                        $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
                    } else {
                        unset($string[$k]);
                    }
                }
                if (!$full) $string = array_slice($string, 0, 1);
                return $string ? implode(', ', $string) . ' ago' : 'just now';
            }

            // Connessione al DB
            $dbconn = pg_connect("  host = localhost
                                    port = 5432
                                    dbname = PDM
                                    user = postgres
                                    password = 1234") 
                                    or die ("Impossibile connettersi: " . pg_last_error());

            @$name = $_POST['name'];
            @$rating = $_POST['rating'];
            @$content = $_POST['content'];

            if (isset($name, $rating, $content)) {
                
                // Insert a new review (user submitted form)
                $stmt2 = "INSERT INTO reviews VALUES ($1,$2,$3,$4)";
                @$result2 = pg_query_params($dbconn, $stmt2, array($name, $content, $rating, date("Y-m-d H:i:s")));

                exit('Grazie del contributo!');
            }
            // Get all reviews by the Page ID ordered by the submit date
            $stmt3 = "SELECT * FROM reviews ORDER BY submit_date DESC";
            $result3 = pg_query($dbconn, $stmt3);
            
            $reviews = pg_fetch_all($result3, PGSQL_ASSOC);

            // Get the overall rating and total amount of reviews
            $stmt4 = "SELECT AVG(rating) AS overall_rating, COUNT(*) AS total_reviews FROM reviews";
            $result4 = pg_query($dbconn, $stmt4);

            $reviews_info = pg_fetch_array($result4, null, PGSQL_ASSOC);

        ?>

        <div class="overall_rating">
            <span class="num"><?=number_format($reviews_info['overall_rating'], 1)?></span>
            <span class="stars"><?=str_repeat('&#9733;', round($reviews_info['overall_rating']))?></span>
            <span class="total"><?=$reviews_info['total_reviews']?> reviews</span>
        </div>
        <a href="#" class="write_review_btn">Lasciaci una recensione!</a>
        <div class="write_review">
            <form>
                <div class="range-container">
                    <!-- <input type="text" name="name" placeholder="Inserisci il tuo nome" required> -->
                    <span >Inserisci qua un voto da 1 a 5 stelle</span>
                    <input name="rating" style="margin-left:27vw" type="range" class="form-range" value="3" min="1" max="5" onchange="update(this.value)" required> 
                    <!-- <input name="rating" type="number" min="1" max="5" placeholder="Rating (1-5)" required> -->
                    <span id="range-stelline" class="stars"></span>
                </div>
                <textarea style= "width: 60%;" name="content" placeholder="Scrivi qui la tua recensione..." required></textarea>
                <div><button type="submit">Invia la tua recensione</button></div>
            </form>
        </div>

        <?php foreach ($reviews as $review): ?>
            <div class="review">
                <h2 class="name">
                    <span id="recensore">
                        <?=htmlspecialchars($review['name'], ENT_QUOTES)?>
                    </span>   
                    <span id="stelline">
                        <span class="date"><?=time_elapsed_string($review['submit_date'])?></span>
                        <span class="rating"><?=str_repeat('&#9733;', $review['rating'])?></span>
                    </span>
                </h2>
                <div class="content"><?=htmlspecialchars($review['content'], ENT_QUOTES)?></div>
            </div>
        <?php endforeach ?>

        <!-- Optional JS scripts-->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src = "../../js/global.js" async></script>
        <script src="reviews.js"></script>

        <!-- Bootstrap JS bundle (Popper included)-->
        <script src = "../../js/bootstrap.bundle.js"></script>


    </body>
</html>