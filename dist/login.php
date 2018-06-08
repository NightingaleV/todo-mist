<?php include('php/user-modules/user-login.php');
//Google sing in
//$loginURL = $gClient->createAuthUrl();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
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
              <div class="login-box text-center">
                <button name="login" type="submit" class="btn btn-form btn-login btn-lg mt-3">Log in</button>
                <button name="login" type="button" onclick="window.location = '<?php echo $loginURL ?>';" class="btn btn-form btn-danger btn-lg mt-3 ml-2">Log in with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
<?php include('templates/app-js-scripts.php') ?>
</html>