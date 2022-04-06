<?php
	include 'connection.php';
	$uName = mysqli_real_escape_string($con,$_POST['rName']);
	$uEmail = mysqli_real_escape_string($con,$_POST['rEmail']);
	$uPassword = mysqli_real_escape_string($con,$_POST['rPassword']);
	// CHECK IS USER EXIST OR NOT
	$checkUser = mysqli_query($con,"SELECT uId From user_info WHERE username='$uEmail'") or die("SELECT_QUERY_FAILED");

	if(mysqli_num_rows($checkUser)>0){
		echo "<h1>Account Already Exist. <a href='../login.php'>Login</a> Please</h1>";
	}else{
		$hashPassword = password_hash("$uPassword", PASSWORD_DEFAULT);
		if(mysqli_query($con,"INSERT INTO user_info VALUES('','$uName','$uEmail','$hashPassword')")){
			echo "<h1>Account Created SuccessFully <a href='../login.php'> Click Here </a> to login</h1>";
		}else{
			echo "<h1>Something Went Wrong</h1>";
		}
	}
?>