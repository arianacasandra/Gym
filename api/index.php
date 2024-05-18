<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

//save data in JSON FORMAT
$requestBody = json_decode(file_get_contents('php://input'));

$method = $_SERVER['REQUEST_METHOD'];
switch($method)
{
    case "POST":
        $username = $requestBody->username;
        $password = $requestBody->password;
        $sql = "SELECT * FROM admin WHERE username = :username AND password = :password";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result) {
            $response = ['status' => 'true'];
        } else {
            $response = ['status' => 'false'];
        }
        echo json_encode($response);
        break;

}


?>