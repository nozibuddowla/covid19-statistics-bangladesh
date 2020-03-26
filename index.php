<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$country = 'bangladesh';
curl_setopt($ch, CURLOPT_URL, 'https://covid19.mathdro.id/api/countries/' . urlencode($country));
$result = curl_exec($ch);
$data = json_decode($result, true);
?>
<!DOCTYPE html>
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <title>COVID-19 Statistics of Bangladesh</title>
        <link rel="shortcut icon" href="img/favicon.jpg">
    </head>
    <body>
        <header>
            <div class="overlay">
                <h1 class="text-center">COVID-19 Statistics <br>of Bangladesh</h1>
            </div>
        </header>
        <br>
        <br>
        <br>
        <br>
        <div class="card text-center">
            <div class="card-body">
                <?php if(!empty($data['confirmed'])): ?>
                <ul>
                    <li>Infected:
                        <?php echo number_format($data['confirmed']['value']) ?>
                    </li>
                    <li>Recovered:
                        <?php echo number_format($data['recovered']['value']) ?>
                    </li>
                    <li>Death(s):
                        <?php echo number_format($data['deaths']['value']) ?>
                    </li>
                    <p class="card-text"><small class="text-muted">Last updated <?php echo $data['lastUpdate'] ?> ago</small></p>
                </ul>
                <?php endif; ?>
            </div>
        </div>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="js/jquery.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </body>
</html>