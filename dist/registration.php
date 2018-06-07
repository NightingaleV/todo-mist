<?php include('php/user-modules/user-register.php') ?>
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

<body class="home registration-page">
  <?php include('templates/home-navbar.php') ?>
  <main id="top-section">
    <div class="overlay-background h-100 d-flex align-items-centerd-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center font-light">
          <div class="col-12 col-md-7">
            <h1 class="text-center mt-5 mt-sm-0">Sign up now!</h1>
            <div class="col-12 d-none d-md-block col-lg-10 offset-lg-1">
              <p class="mt-3">It is free! What are you waiting for?</p>
              <?php 
                if ( $error != '' ) {
								echo $errorMessage;
							 }
							 if ( $success != '' ) {
								echo $successMessage;
							 }
              ?>
            </div>
          </div>
          <div class="col-12 col-sm-8 col-lg-4">
            <form class="sign-up-form" method="post">
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input name="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                <small id="emailHelp" class="form-text text-mute">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Confirm password</label>
                <input name="password2" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="text-center">
                <button name="registration" type="submit" class="btn btn-form btn-signup btn-lg mt-2">Sign up!</button>
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