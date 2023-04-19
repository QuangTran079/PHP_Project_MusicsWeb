<?php
require './connect.php';
session_start();
// check login
$email_login = $_POST['email_login'];
$password_login = $_POST['password_login'];
$sql = "SELECT * FROM users WHERE email = '$email_login'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
if ($result->num_rows > 0) {
    if (md5($password_login) == $row['password']) {
        $_SESSION["id"] = $row["u_id"];
        echo "successLogin";
    } else {
        echo "errLogin";
    }
} else {
    echo "errLogin";
}
$conn->close();
