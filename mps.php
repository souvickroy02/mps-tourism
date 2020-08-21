<?php

$server="localhost:3308";
$user="root";
$password="";
$db="tourism";

$conn=mysqli_connect($server,$user,$password,$db) or die("Connection Failed");
//echo "Connection Successfull";

$Name = $_POST['name'];
$MOB = $_POST['mob'];
$EID = $_POST['eid'];
$PSWRD = $_POST['pswrd'];

$sql = "INSERT INTO USER VALUES('$Name','$MOB','$EID','$PSWRD')";

if(!mysqli_query($conn,$sql))
{
	echo 'Not Inserted';
}
else
{
	echo 'Inserted';
}

header("refresh:2;url=mps.html");
?>