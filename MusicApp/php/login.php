<?php
session_start();
require './connect.php';
if (!empty($_SESSION["id"])) {
    header("Location: ../index.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style_php.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <title>Login</title>
</head>

<body>
    <div class="login form_user">
        <h1 class="title">Đăng nhập</h1>
        <div id="message" style="color: red;background-color: bisque;"></div>
        <form action="./checkLogin.php" method="post" autocomplete="off" id="myform">
            <label for="email_login">Email</label>
            <input type="email" id="email_login" name="email_login" placeholder="Nhập email của bạn.">
            <span class="error" id="email_err"></span>

            <label for="password_login">Mật khẩu</label>
            <input type="password" id="password_login" name="password_login" placeholder="Mật khẩu của bạn">
            <span class="error" id="password_err"></span><br><br>

            <a href="">Forgot your password?</a>
            <div class="submit_login">

                <div class="save_login">
                    <label class="container">Remember me
                        <input type="checkbox" checked="checked">
                        <span class="checkmark"></span>
                    </label>
                </div>

                <input type="submit" value="Đăng nhập" name="btn-submit-login" id="btn-submit-login">

            </div>
        </form>
        <h2>Don't have an account?</h2>
        <button><a href="./register.php">SIGN UP FOR ANMP3</a></button>
    </div>

    <script>
        $(document).ready(function() {

            $('#email').on('blur', function() {
                checkEmail();
            });
            $('#password').on('blur', function() {
                checkPass();
            });


            $('#myform').submit(function(e) {
                e.preventDefault();
                if (!checkEmail() && !checkPass()) {
                    $("#message").html(`Thông tin không chính xác.`);
                } else if (!checkEmail() || !checkPass()) {
                    $("#message").html(`Thông tin không chính xác.`);
                } else {
                    $("#message").html("");
                    var data = $(this).serialize();
                    $.ajax({
                        type: "POST",
                        url: "./checkLogin.php",
                        data: data,
                        success: function(data) {
                            if (data == "successLogin") {
                                $(location).attr('href', '../index.php');
                            } else {
                                $("#message").html("Tài khoản hoặc mật khẩu không chính xác.");
                            }
                        },
                    });
                }
            });
        });



        function checkEmail() {
            var pattern1 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $('#email_login').val();
            var validemail = pattern1.test(email);
            if (email == "") {
                $('#email_err').html('Chưa nhập email đăng nhập kìa.');
                return false;
            } else if (!validemail) {
                $('#email_err').html('Email không hợp lệ (abc@xyz.com)');
                return false;
            } else {
                $('#email_err').html('');
                return true;
            }
        }

        function checkPass() {
            var pass = $('#password_login').val();

            if (pass == "") {
                $('#password_err').html('Không nhập mật khẩu à?');
                return false;
            } else {
                $('#password_err').html("");
                return true;
            }
        }
    </script>
</body>

</html>