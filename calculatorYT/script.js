function getHistory(){
	return document.getElementById('history-value').innerText;
}
function printHistory(num){
	document.getElementById('history-value').innerText=num;
}
function getOutput(){
	return document.getElementById('output-value').innerText;
}
function printOutput(num){
	if(num == ""){
		document.getElementById('output-value').innerText=num;
	}else{
		document.getElementById('output-value').innerText=getFormattedNumber(num);
	}
}

function getFormattedNumber(num){
	if(num =="-"){
		return "";
	}//to fixed -ve number
	var n = Number(num)/*convert any type to number*/
	var value = n.toLocaleString("en");
	return value;
}
//printOutput("67864");
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
//alert(reverseNumberFormat(getOutput()));
//action on operator class button
var operator = document.getElementsByClassName('operator');
for(i = 0; i<operator.length; i++){
	operator[i].addEventListener('click',function(){
		//alert("operator clicked: " + this.id)
		//for clear
		if(this.id == 'clear'){
			printHistory('');
			printOutput('');
		}
		//for backspace
		else if(this.id == 'backspace'){
			var output = reverseNumberFormat(getOutput()).toString();
			if(output){//if(output has value)
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}//self
		else if(this.id == 'sign'){
			var o = getOutput();
			o = o*-1;
			printOutput(o)
		}
		// for operator
		else{
			var output = getOutput();
			var history = getHistory();
			//add more operator
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history = history.substr(0,history.length-1);
				}
			}

			if(output != "" || history != ""){
				output = output==""?output:reverseNumberFormat(output);
				history = history + output; 
				if(this.id == "="){
					var result = eval(history);
					printOutput(result);
					printHistory("");
				}else{
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	})
}

//action on number class button
var number = document.getElementsByClassName('number');
for(i = 0; i<number.length; i++){
	number[i].addEventListener('click',function(){
		//alert("number clicked: " + this.id)
		var output = reverseNumberFormat(getOutput());//reverseoutut to normal to concate
		if(output != NaN){
			output = output+this.id;
			printOutput(output)//display result
		}
	})
}