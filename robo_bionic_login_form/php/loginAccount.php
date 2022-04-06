<?php
	include 'connection.php';

	$uEmail = mysqli_real_escape_string($con,$_POST['lEmail']);
	$uPassword = mysqli_real_escape_string($con,$_POST['lPassword']);
	// CHECK IS USER EXIST OR NOT
	$checkUserEmail = mysqli_query($con,"SELECT * From user_info WHERE username='$uEmail'") or die("SELECT_QUERY_FAILED");

	if(mysqli_num_rows($checkUserEmail)>0){
		$dbRes = mysqli_fetch_assoc($checkUserEmail);
		$verifyPassword = password_verify($uPassword, $dbRes['pass']);
		if($verifyPassword){
			$_SESSION['IS_LOGIN'] = true;
			echo "<h1>Login Success<a href='https://quizsagar.com'> Visit QuizSagar Web App</a> Please</h1>";
			echo "<p><a href='logout.php>Logout</a></p>";
		}else{
			echo "<h1>Please Enter Correct Password.</h1>";
		}
	}else{
			echo "<h1>Please Enter Correct Username/email.</h1>";
			echo "<p>If you're new user then <a href='../signup.htm'> create an account.</a></p>";

	}
?>