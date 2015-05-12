

function MatrixCalc()
{
var a11 = document.getElementById('a11'); 
var a12 = document.getElementById('a12');
var a13 = document.getElementById('a13');

var a21 = document.getElementById('a21'); 
var a22 = document.getElementById('a22');
var a23 = document.getElementById('a23');

var a31 = document.getElementById('a31'); 
var a32 = document.getElementById('a32');
var a33 = document.getElementById('a33');

var b11 = document.getElementById('b11'); 
var b12 = document.getElementById('b12');
var b13 = document.getElementById('b13');

var b21 = document.getElementById('b21'); 
var b22 = document.getElementById('b22');
var b23 = document.getElementById('b23');

var b31 = document.getElementById('b31'); 
var b32 = document.getElementById('b32');
var b33 = document.getElementById('b33');
var c11;
c11 = a11*b11 + a12*b21 + a13*b31;
document.write(a11*b11 + a12*b21 + a13*b31);
}
//element.onevent = MatrixCalc;
