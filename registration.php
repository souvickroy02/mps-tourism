<?php
$server = "localhost";
$user = "id14668627_mpstourism";
$password = "Sherlock221b@";
$db = "id14668627_tourism";
$con = mysqli_connect($server, $user, $password);
mysqli_select_db($con, $db);
$Name = $_POST['name'];
$MOB = $_POST['mob'];
$EID = $_POST['eid'];
$PSWRD = $_POST['pswrd'];
$sql = "select * from user where Email = '$EID'";
$result = mysqli_query($con, $sql);
if (!($result)) {
    header("refresh:2; url=register.html");
    echo 'Sorry sever is not responding..try again later..';
}
else{
    $num = mysqli_num_rows($result);
    if($num > 0){
        $row = mysqli_fetch_assoc($result);
        if ($EID == $row['Email']) {
            header("refresh:2; url=register.html");
            echo "Email Id Is Already Taken! Use Another Email Id To Register!!";
        }
    }
    $reg = "insert into user(Name, Mobile_no, Email, Password) values ('$Name', '$MOB', '$EID', '$PSWRD')";
    mysqli_query($con, $reg);
    header("Location: register_success.html");
}
// mysqli_close($con);
?>