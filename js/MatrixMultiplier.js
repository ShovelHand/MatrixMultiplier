

function MatrixCalc()
{
var a11 = parseFloat(document.getElementById('a11').value); 
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
