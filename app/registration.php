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

<body>
  <?php include('templates/navbar-home.php') ?>
  <header id="top-section">
    <div class="overlay-background h-100 d-flex align-items-centerd-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center font-light">
          <div class="col-12 col-md-7">
            <h1 class="text-center mt-5 mt-sm-0">Sign up now!</h1>
            <div class="col-12 d-none d-md-block col-lg-10 offset-lg-1">
              <p class="mt-3">It is free! What are you waiting for?</p>
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
                <button name="submit" type="submit" class="btn btn-secondary btn-lg mt-3">Sign up!</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <section id="section-icons" class="container bg-light">
      <div class="row">
        <div class="col-12 col-md-4 d-inline-flex d-md-flex flex-md-column align-items-center px-3 py-4">
          <i class="pr-3 mx-auto md-dark material-icons md-front">work</i>
          <p>Create a project for your goals, work stuff or for every role of your. It is up to you!</p>
        </div>
        <div class="col-12 col-md-4 d-inline-flex d-md-flex flex-md-column align-items-center px-3 py-4"><i class="pr-3 mx-auto md-dark material-icons md-front">list</i>
          <p>Make list of working tasks or just a checklist for your next party. What is written, can't be forgotten.</p>
        </div>
        <div class="col-12 col-md-4 d-inline-flex d-md-flex flex-md-column align-items-center px-3 py-4"><i class="pr-3 mx-auto md-dark material-icons md-front">label</i>
          <p>Label the task with the context. Prioritize them with Eisenhower matrix. Know what matters.</p>
        </div>
      </div>
    </section>
    <section id="section-player" class="container-fluid">
      <div class="row h-100 justify-content-center overlay-background">
        <div class="col-12 h-100 d-flex flex-column justify-content-center font-light">
          <h2 class="mx-auto">Have a control of your life!</h2>
          <p class="mx-auto">Life is a game and world is a playground. Make sure you play it with right tools.</p>
        </div>
      </div>
    </section>
  </main>
</body>
<!--Bootstrap JS-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
<script src="js/main.js"></script>
</html>