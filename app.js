/*FOR*(repetitivas)*/
/*for(var i=10;i>=1; i--){
   console.log(i);
}*/
/* Sentencia WHILE, DO WHILE*/
/*var i = 1;
while(i<=10){
    console.log(i);
    i++;
}
console.log(i);*/

/*Sentecia DO WHILE*/
var i= 1
do{
    console.log(i);
    i++;
;
}while(i<=10);
console.log(i);

















































/*sentencia switch*/
/*var mes = 4;
switch(mes){
    case 1:
        console.log(' enero');
        break;
     case 2:
        console.log(' febrero');
        break;
     case 3:
        console.log(' marzo');
        break;
     case 4:
        console.log(' abril');
        break;
    default:
        console.log(' mes no encontrado') 
}*/

/*ARREGLOS*/
/*var nombre = [exe,nata,esteban,ruper];
var vegetales= new Array(tomate,lechuga,zanahoria);
console.log(nombre [3])
console.log(vegetales[2])*/


/*sentencias anidadas*/
/*var nombre='exe';
var edad= 32;
//edad<12 es niño
// edad >11, <18 es un adolscente
// edad >17, es <60 es un adulto
// edad es >60 es anciano
if(edad<12){
    console.log(nombre+' es un niño');
}else if((edad>11) && (edad<18)){
    console.log(nombre+' es un adolescente');
}else if ((edad>18)&&(edad<60)){
    console.log(nombre+' es un adulto');
}else{
    console.log(nombre+' es un anciano');
}*/

/*sentencias if...else

var nombre= 'exe';
var escasado= false;

if(escasado==true){
    console.log(nombre + ' es casado');
}
else{
    console.log(nombre + ' es soltero')
}*/

/*OPERADORES LOGICOS,UNARIOS Y DE ASIGNACION
LOGICOS< > <= >= ==
    var edadexe, edadnata, diferenciaedad;
edadnata= 34;
edadexe= 32;
    var mayornata=!(edadexe==edadnata);
console.log(mayornata);
 OPERADORES UNARIOS
++INCREMENTO
--DECREMENTO
edadexe++;
console.log(edadexe);
//edadnata--;
//console.log(--edadnata);
//console.log(edadnata--);
OPERADORES DE ASIGNACION
   +=,-=,/=,*=,%=  
   var a=12;
   var b=5;
   var c= a % 5;//resto de una division(11/5)
   console.log(c)
   a+=b;
   console.log(a);/*

/*VARIABLES
var nombre='exe';
console.log(nombre);
console.log(typeof (nombre))
var edad= 32;
console.log(edad);
console.log(typeof (edad))
var sueldo=3200;
console.log(sueldo);
console.log(typeof (sueldo))
var tienetrabajo= false;
console.log(tienetrabajo);
console.log(typeof(tienetrabajo));
var puestodetrabajo= 
console.log(puestodetrabajo);*/

/*OPERADORES MATEMATICOS 
var diferenciaedad, edadnata, edadexe;
var sumaedades, yearexe , yearnata,yearactual;

edadexe =32;
edadnata =34;
yearactual=2022;

diferenciaedad= edadnata-edadexe;
sumaedades= edadexe+edadnata;
yearnata= yearactual-edadnata;
yearexe= yearactual-edadexe;
console.log(diferenciaedad);
console.log(sumaedades);
console.log('año en que naci nata '+ yearnata);
console.log('año en que nacio exe '+ yearexe);
console.log(yearactual * 5);
console.log(yearactual/2);*/