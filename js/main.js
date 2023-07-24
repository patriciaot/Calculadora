//Calculadora
let btn0= document.getElementById("btn0");
let btn1= document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let btn3= document.getElementById("btn3");
let btn4= document.getElementById("btn4");
let btn5= document.getElementById("btn5");
let btn6= document.getElementById("btn6");
let btn7= document.getElementById("btn7");
let btn8= document.getElementById("btn8");
let btn9= document.getElementById("btn9");
let btnPumto= document.getElementById("btnPunto");
let btnIgual= document.getElementById("btnIgual");
let btnSuma= document.getElementById("btnSuma");
let btnResta= document.getElementById("btnResta");
let btnMultiplica= document.getElementById("btnMultiplica");
let btnDivide= document.getElementById("btnDivide");

let txtResultado = document.getElementById("txtResultado");
let lblDatos = document.getElementById("lbDatos");

//presionar los numeros y que se vaya concatenando en el cuadro de texto; cada numero tendra su evento; una vez que yo presiono una de las operaciones permitidas, me debe escribir en el labell el numero que tengo y la operación, posteriormente cuando esceribo un nuevo numero, no lo debe concatenar, sino q lo reemplaza donde el 12 esta almacenado y la operacion tambien, cuando yo le presione igual me dará el resultado y la almacenacion de los numeros pasados junto con sus operadores aritméticos