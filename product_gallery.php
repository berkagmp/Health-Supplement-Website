<?php $variable = $_REQUEST['pid']?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>KEYORA - PRODUCT</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="slick/slick.css">
<link rel="stylesheet" type="text/css" href="slick/slick-theme.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/product.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/app.js"></script>
</head>
<body>

<div w3-include-html="nav.html"></div>

<div id="products" class="container text-center" style="margin-top:150px;">
</div>

<div w3-include-html="footer.html"></div>

<script src="/slick/slick.js" type="text/javascript" charset="utf-8"></script>
<script>
includeHTML();
getProductsforgallery(<?=$variable?>);
</script>
</body>
</html>
