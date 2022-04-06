function getOutput(){
	return 	document.getElementById('output-value').innerText;
}
function printOutput(num){
		document.getElementById('output-value').innerText=num;

}
var operator = document.getElementsByClassName('operator');
for(i = 0; i<operator.length; i++){
	operator[i].addEventListener('click',function(){
		if(this.id == "C"){
			printOutput("0")
		}
		//for backspace
		else if(this.id == 'CE'){
			var output = getOutput().toString();
			if(output){//if(output has value)
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		//for sign
		else if(this.id == '+/-'){
			var o = getOutput();
			o = o*-1;
			printOutput(o)
		}
		//for operator
		else{
			var output = getOutput();
			if(this.id == "="){
					var result = eval(output);
					printOutput(result);
					//printOutput("");
				}else{
					output = output + this.id;
					printOutput(output);
					//printOutput("");
				}

		}
	})
}
//for number
var number = document.getElementsByClassName('number');
for(i=0; i<number.length; i++){
	number[i].addEventListener("click",function(){
		//alert(getOutput())
		var output = getOutput();

		if(output != NaN){
			
			output += this.id;
			printOutput(output);
		
		}
	})
}
