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
    <title>COVID-19</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> </head>

<body>
    <h1 class="text-center">COVID-19 Statistics of Bangladesh</h1>
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
</body>

</html>