<?php
require('./connect.php');
session_start();
if (!empty($_SESSION['id'])) {
    if (!empty($_POST['data'])) {
        $song_id = $_POST['data'];
        $u_id = $_SESSION['id'];
        $sql1 = "SELECT * FROM library WHERE m_id = '$song_id' AND u_id ='$u_id'";
        if ($conn->query($sql1)->num_rows > 0) {
            echo "exited";
        } else {
            $sql = "INSERT INTO library (`m_id`,`u_id`) VALUES ('$song_id','$u_id')";
            if ($conn->query($sql) === TRUE) {
                echo "success";
            } else {
                echo "error";
            }
        }
    } else {
        echo "error";
    }
} else {
    echo "UserExits";
}
