var loginForm = document.querySelector(".loginForm");
var createForm = document.querySelector(".createForm");
var passInput = document.getElementById("password");
var pswErrorMsg = document.getElementById("pswErrorMsg");
var createFormPassMsgBox = document.getElementById("createFormPassMsgBox");

// errormsg element
var pswCapErrorMsg = document.getElementById("pswCapErrorMsg");
var pswLowErrorMsg = document.getElementById("pswLowErrorMsg");
var pswNumErrorMsg = document.getElementById("pswNumErrorMsg");
var pswSymErrorMsg = document.getElementById("pswSymErrorMsg");
var pswLenErrorMsg = document.getElementById("pswLenErrorMsg");
var confirmPassword = document.getElementById("confirmPassword");
var cnfPassErrorMsg = document.getElementById("cnfPassErrorMsg");

var glbErrorMsg = document.getElementById("glbErrorMsg");

/*to form validation*/
var formValSts = false;
var matchPassSts =false;

function showLoginForm(){
	loginForm.classList.add("showForm")
	createForm.classList.remove("showForm")
}
function showCreateForm(){
	loginForm.classList.remove("showForm")
	createForm.classList.add("showForm")
}
/*for password validataion*/
passInput.addEventListener('focus',function(){
	createFormPassMsgBox.classList.toggle("showMsgBox")
})
passInput.addEventListener('blur',function(){
	createFormPassMsgBox.classList.toggle("showMsgBox")
})
function validatePass(data){
	let value = data.value;
	
	// for capital letter /g for global match
	if(value.match(/[A-Z]/g)){
		pswCapErrorMsg.classList.add("valid")
		pswCapErrorMsg.classList.remove("inValid")
		formValSts = true;
	}else{
		pswCapErrorMsg.classList.remove("valid")
		pswCapErrorMsg.classList.add("inValid")
	}
	// for small letter
	if(value.match(/[a-z]/g)){
		pswLowErrorMsg.classList.add("valid")
		pswLowErrorMsg.classList.remove("inValid")
		formValSts = true;
	}else{
		pswLowErrorMsg.classList.remove("valid")
		pswLowErrorMsg.classList.add("inValid")
		formValSts = false;
	}
	// for number letter
	if(value.match(/[0-9]/g)){
		pswNumErrorMsg.classList.add("valid")
		pswNumErrorMsg.classList.remove("inValid")
		formValSts = true;
	}else{
		pswNumErrorMsg.classList.remove("valid")
		pswNumErrorMsg.classList.add("inValid")
		formValSts = false;
	}
	// for length
	if(value.length>=8){
		pswLenErrorMsg.classList.add("valid")
		pswLenErrorMsg.classList.remove("inValid")
		formValSts = true;
	}else{
		pswLenErrorMsg.classList.remove("valid")
		pswLenErrorMsg.classList.add("inValid")
		formValSts = false;
	}
	// for symbol letter
	if(value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g)){
		pswSymErrorMsg.classList.remove("valid")
		pswSymErrorMsg.classList.add("inValid")
		formValSts = false;
	}else{
		pswSymErrorMsg.classList.add("valid")
		pswSymErrorMsg.classList.remove("inValid")
		formValSts = true;
	}
	return formValSts;
}
/*showHide password*/
function showHidePass(ele,target){
	let targetEle = document.getElementById(target);
	console.log(document.getElementById(target))
	if(targetEle.getAttribute("type") == "Password"){
		targetEle.setAttribute("type","Text")
		ele.innerText = "Hide"
	}else{
		targetEle.setAttribute("type","Password")
		ele.innerText = "Show"	
	}
}
/*mathPass*/
/*for password validataion*/
confirmPassword.addEventListener('focus',function(){
	cnfPassErrorMsg.classList.toggle("showMsgBox")	
})
confirmPassword.addEventListener('blur',function(){
	cnfPassErrorMsg.classList.toggle("showMsgBox")
})
function matchPass(e){
	if(passInput.value == e.value){
		cnfPassErrorMsg.classList.add("valid")
		cnfPassErrorMsg.classList.remove("inValid")
		// for gloabl eerro msg
		glbErrorMsg.innerText = ""
		glbErrorMsg.classList.remove("inValid")
		matchPassSts = true
	}else{
		cnfPassErrorMsg.classList.remove("valid")
		cnfPassErrorMsg.classList.add("inValid")
		matchPassSts = false;
	}
	return matchPassSts;
}
/*function used in formValFun*/
function inValidFun(ele,msg){
	ele.innerText =msg
	ele.classList.remove("valid")
	ele.classList.add("inValid")
	return false;
}
function validFun(ele,msg){
	ele.innerText =msg
	ele.classList.remove("inValid")
	return true;
}
// formval funtion
function formValFun(argument) {
	let passInput = document.getElementById("password");
	let confirmPassword = document.getElementById("confirmPassword");
	if(passInput.value.length>=8){
		if(passInput.value.match(/[a-z]/g)){
			if(passInput.value.match(/[A-Z]/g)){
				if(passInput.value.match(/[0-9]/g)){
					if(!(passInput.value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g))){
						validFun(glbErrorMsg,"");
						if(passInput.value == confirmPassword.value){
							return validFun(glbErrorMsg,"");
						}else{
							return inValidFun(glbErrorMsg,"Password does not matched");
						}
					}else{
						return inValidFun(glbErrorMsg,"Password must contain at least 1 special character");
					}
				}else{
					return inValidFun(glbErrorMsg,"Password must not contain at least 1 number.");
				}
			}else{
				return inValidFun(glbErrorMsg,"Password must contain at least 1 upper case character");
			}
		}else{
			return inValidFun(glbErrorMsg,"Password must contain at least 1 LOWER case character");
		}
	}else{
		return inValidFun(glbErrorMsg,"Password must contain at least 8 character")
	}
}