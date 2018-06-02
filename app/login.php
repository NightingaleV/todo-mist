<?php include('php/user-modules/user-login.php') ?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Your more responsible friend. Keep your self organized and get your job done with Todomist.">
  <meta name="keywords" content="todomist">
  <meta name='author' content='Vitezslav Slavik'>
  <link rel="author" href="https://plus.google.com/108919977341036009978"/>
  <link rel="canonical" href="http://todomist.com"/>

  <!--Custom Metas-->
  <meta name='HandheldFriendly' content='True'>
  <title>Todomist - log in to our application and stay organized</title>

  <!--Bootstrap CSS-->
  <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  <link rel="stylesheet" href="css/main.css">
</head>

<body class="home login-page">
  <?php include('templates/home-navbar.php') ?>
  <main id="top-section">
    <div class="overlay-background h-100 d-flex align-items-centerd-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center font-light">
          <div class="col-12 col-sm-8 col-lg-4">
            <h1 class="text-center mt-5 mt-sm-0">Log in!</h1>
            <form class="sign-up-form" method="post">
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input name="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-check">
                <input name="stayloggedin" type="checkbox" class="form-check-input" id="cookie-checkbox" value="1">
                <label class="form-check-label" for="cookie-checkbox">Keep me logged in!</label>
              </div>
              <?php 
                if ( $error != '' ) {
								echo $errorMessage;
							 }
              ?>
              <div class="text-center">
                <button name="login" type="submit" class="btn btn-form btn-login btn-lg mt-3">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
<!--Bootstrap JS-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
<script src="js/main.js"></script>
</html>