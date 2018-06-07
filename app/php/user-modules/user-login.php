<?php
session_start();
$error = '';


//User already logged in
if (array_key_exists('id', $_COOKIE) && $_COOKIE['id'] != '') {
    $_SESSION['id'] = $_COOKIE['id'];
    $_SESSION['username'] = $_COOKIE['username'];
    header('Location: app.php?project=Inbox');
}

//User fulfilled the login form
if (isset($_POST['login'])) {

    require(dirname(__FILE__) . "/../db-connection.php");

    //validation
    if (!$_POST['username'] || !$_POST['password']) {
        foreach ($_POST as $key => $value) {
            if (empty($value)) {
                switch ($key) {
                    case 'username':
                        $error .= 'An <strong>username</strong> is required!<br>';
                        break;
                    case 'password':
                        $error .= 'A <strong>password</strong> is required!<br>';
                        break;
                }
            }
        }
    } else {
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = $_POST['password'];

        $stmt = $db->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->bind_param("s", $_POST['username']);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $stmt->close();

        print_r($row);
        if (isset($row)) {
            if (password_verify($password, $row['password'])) {
                $_SESSION['id'] = $row['id'];
                $_SESSION['username'] = $row['username'];
                if ($_POST['stayloggedin'] == '1') {
                    setcookie('id', $row['id'], time() + 60 * 60 * 24 * 30);
                    setcookie('username', $row['username'], time() + 60 * 60 * 24 * 30);
                }
                header('Location: app.php?project=Inbox');

            } else {
                $error .= "Your password is not correct!";
            }
        } else {
            $error .= "This username doesn't exist!";
        }
    }
    $errorMessage = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><h4 class="alert-heading">Ups!</h4>' . $error . '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
}
