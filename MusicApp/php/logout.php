<?php
require('./connect.php');
session_start();
unset($_SESSION["id"]);
session_destroy();
header("Location: ../index.php");
