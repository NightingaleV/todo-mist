<?php
session_start();
$error = '';
$errorMessage = '';

if (isset($_POST['registration'])) {

    require(dirname(__FILE__) . "/../db-connection.php");

    //Validation - form filled
    if (!$_POST['username'] || !$_POST['email'] || !$_POST['password'] || !$_POST['password2']) {
        foreach ($_POST as $key => $value) {
            if (empty(trim($value))) {
                switch ($key) {
                    case 'username':
                        $error .= 'An <strong>username</strong> is required!<br>';
                        break;
                    case 'email':
                        $error .= 'An <strong>email address</strong> is required!<br>';
                        break;
                    case 'password':
                        $error .= 'A <strong>password</strong> is required!<br>';
                        break;
                    case 'password2':
                        $error .= 'Please confirm your password!<br>';
                        break;
                }
            }
        }
    } elseif ($_POST['password'] != $_POST['password2']) {
        $error .= 'The filled passwords are different.';

    } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $error .= 'An <strong>email</strong> is not valid!<br>';

    } else {
        //Post variables
        $username = trim(mysqli_real_escape_string($db, $_POST['username']));
        $email = mysqli_real_escape_string($db, $_POST['email']);
        $password = $_POST['password'];
        $password2 = $_POST['password2'];

        //Prepared selects
        $stmt = $db->prepare("SELECT * FROM users WHERE username = ? LIMIT 1");
        $stmt->bind_param("s", $_POST['username']);
        $stmt->execute();
        $result = $stmt->get_result()->num_rows;
        $stmt->close();

        $stmt2 = $db->prepare("SELECT * FROM users WHERE email = ? LIMIT 1");
        $stmt2->bind_param("s", $_POST['email']);
        $stmt2->execute();
        $result2 = $stmt2->get_result()->num_rows;
        $stmt2->close();

        //Validation - user / email is not registered
        if ($result > 0 || $result2 > 0) {
            switch (1) {
                case ($result && $result2):
                    $error .= '<strong>Email</strong> has been already registered.<br>';
                    $error .= '<strong>Username</strong> has been already taken.<br>';
                    break;
                case $result:
                    $error .= '<strong>Username</strong> has been already taken.<br>';
                    break;
                case $result2:
                    $error .= '<strong>Email</strong> has been already registered.<br>';
                    break;
            }

        } else {
            //INSERT user into database
            try {
                $db->begin_transaction();
                $stmt = $db->prepare("INSERT INTO users (username, email) VALUES (?, ?)");
                $stmt->bind_param("ss", $username, $email);
                $stmt->execute();
                $user_id = $stmt->insert_id;
                $stmt->close();
                //hashing password
                $db->query("UPDATE `users` SET password = '"
                    . password_hash($password, PASSWORD_BCRYPT, array('cost' => 10))
                    . "' WHERE id = " . $db->insert_id . " LIMIT 1");
                $db->query("INSERT INTO projects (project,user_id) VALUES ('Inbox'," . $user_id . ")");
                $db->commit();

                //Successfully inserted into database
                $_SESSION['id'] = $user_id;
                $_SESSION['username'] = $username;
                $error .= 'Hotovo';
                header('Location: app.php?project=Inbox');


            } catch (Exception $e) {
                $error .= 'Could not sign you up - please try again';
                $db->rollback();
            }
        }
    }
    $errorMessage = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><h4 class="alert-heading">Ups!</h4>' . $error . '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
}