<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>FlaotingLable</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
	<div class="loginForm ">
		<form action="php/loginAccount.php" method="post">
			<fieldset>
			<legend>Login</legend>
			<input type="email" name="lEmail"  placeholder="Username" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter your email. ALL	CHARACTER IN LOWER CASE  like- abc@xyz.com. " required="">
			<label for="userName">Username</label>
			<input type="Password" id="lPassword" name="lPassword"  placeholder="Password" required="">
			<label for="userName">Password</label>
			<b id="showIcon" onclick="showHidePass(this,'lPassword')">Show</b>
			<br>
			<input type="submit" value="Login">
			<p class="accountInfo">I've not an account.<b><a href="signup.htm">SignUp</a></b></p>
			</fieldset>
		</form>
	</div>

</div>
<script src="script.js"></script>
</body>
</html>