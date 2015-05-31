
function parseString(input)
{
	//Check for trig function
	var cos =  sin = tan = false;
	
	if(input.substring(0,3) == "cos")
		cos = true;
	if(input.substring(0,3) == "sin")
		sin = true;
	if(input.substring(0,3) == "tan")
		tan = true;
	
	if(cos || sin || tan) //get rid of the trig word to make the rest easier
		input = input.substring(3, input.length)
		//strip brackets
	if(input.indexOf('(') != -1)
		input = input.substring(0, input.indexOf('(') -1) + input.substring(input.indexOf('(') + 1, input.length);
	if(input.indexOf(')') != -1)
		input = input.substring(0, input.indexOf(')') );// + input.substring(input.indexOf(')') + 1, input.length);
	
	var firstNumberStr = "";  //now get remaining string while it's a number, and not 'pi'
	var index = 0;
	
	while(index <= input.length) 
	{
		if(!isNaN(input.charAt(index)))
			index++;	
		else
			break;
	}
	firstNumberStr = input.substring(0, index);
	input = input.substring(index, input.length); //cut the first number
	var firstNumber = parseFloat(firstNumberStr);
	if(input.substring(0,2) == "pi" )
	{
		firstNumber = firstNumber * Math.PI;
		input = input.substring(2, input.length);
	}
	//do we divide the first number by a next one?
	var divide = false;
	if (input.substring(0,1) == '/')
	{
		divide = true;
		input = input.substring(1, input.lenght);
	}
	else return firstNumber;
	
	var secondNumberString = "";
	index = 0; 
	while((!isNaN(input.charAt(index) || input[index] == '.')))
	{
		secondNumberString = input.substring(0, index+1);
		index++
		if(index >= input.length)
			break;
	}
	var secondNumber = parseFloat(secondNumberString);
	if (divide)
		firstNumber = firstNumber / secondNumber;
	if(cos)
		return Math.cos(firstNumber);
	else if(sin)
		return Math.sin(firstNumber);
	else if(tan)
		return Math.tan(firstNumber);
	else 
		return firstNumber;
}

function MatrixCalc()
{
var a11 = parseString(document.getElementById('a11').value); 
var a12 = parseFloat(document.getElementById('a12').value);
var a13 = parseFloat(document.getElementById('a13').value);

var a21 = parseFloat(document.getElementById('a21').value); 
var a22 = parseFloat(document.getElementById('a22').value);
var a23 = parseFloat(document.getElementById('a23').value);

var a31 = parseFloat(document.getElementById('a31').value); 
var a32 = parseFloat(document.getElementById('a32').value);
var a33 = parseFloat(document.getElementById('a33').value);

var b11 = parseFloat(document.getElementById('b11').value); 
var b12 = parseFloat(document.getElementById('b12').value);
var b13 = parseFloat(document.getElementById('b13').value);

var b21 = parseFloat(document.getElementById('b21').value); 
var b22 = parseFloat(document.getElementById('b22').value);
var b23 = parseFloat(document.getElementById('b23').value);

var b31 = parseFloat(document.getElementById('b31').value); 
var b32 = parseFloat(document.getElementById('b32').value);
var b33 = parseFloat(document.getElementById('b33').value);

var c11 = a11*b11 + a12*b21 + a13*b31;
var c12 = a11*b12 + a12*b22 + a13*b23;
var c13 = a11*b13 + a12*b23 + a13*b33;

var c21 = a21*b11 + a22*b21 + a23*b31;
var c22 = a21*b12 + a22*b22 + a23*b32;
var c23 = a21*b13 + a22*b23 + a23*b33;

var c31 = a31*b11 + a32*b21 + a33*b31;
var c32 = a31*b12 + a32*b22 + a33*b32;
var c33 = a31*b13 + a32*b23 + a33*b33;

document.write(c11.toString() + " " + c12.toString() + " " + c13.toString() +
"<br>" + c21.toString() + " " + c22.toString() + " " + c23.toString() +
"<br>" + c31.toString() + " " + c32.toString() + " " + c33.toString());
}
//element.onevent = MatrixCalc;
