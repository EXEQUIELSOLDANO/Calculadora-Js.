
/*FUNCIONES*/
/*function mensaje(msj){
    console.log(msj);
}
var msj = 'mensaje como argumento de la funcion';
mensaje(msj);*/

/* ARGUMENTOS DE LA FUNCIONES*/
 /*function sumar (a,b,c=3){
     return a +b+c;
 }
 var result= sumar(4,5,8);
 var result1= sumar(3,7);
console.log(result);
console.log(result1);*/

/*FUNCIONES RECURSIVAS*/
//recursividad llamar funciones por si mismas//
 
/*var factorial=function(n){
    if((n==0) || (n==1))//(barras verticales alt+124)
     return 1;
     else
     return(n * factorial (n-1));
}
console.log(factorial(5));*/

/* ARRAYS*/

 var nombres= ['nata','exe', 'mama'];
 var vegetales= new Array ('tomate', 'lechuga','zanahoria');
  /*console.log(nombres[1]);
  console.log(vegetales[2]);

  nombres[0]='cachito';//mutados
  vegetales[2]='zapallito';
  console.log(nombres[0]);
  console.log(vegetales[2]);

  console.log(nombres.length);//cantidad de elementos que tiene el arreglo
  for(var i=0; i<= vegetales.length - 1; i++){
      console.log(vegetales[i]);
  }
  nombres.forEach(function(elemento , indice){
      console.log(elemento, indice);
})*/
console.log(nombres);
nombres.push('cachito'); // agrega elemento
console.log(nombres);
nombres.unshift('lili');
console.log(nombres);
nombres.pop();     //quitar el ultimo elemento
console.log(nombres);
nombres.shift();
console.log(nombres);
var pos= nombres.indexOf('exe');//posicion del indice
console.log(pos);
nombres.splice(1,2)//eliminar element en cualquier pos
console.log(nombres);

































































































































/*ARREGLOS
var nombre=['exe','nata','ruper','lili'];
var vegetales= new Array('tomate','lechuga','zanaoria');

/*console.log(nombre[2]);
console.log(vegetales[1]);
nombre[0]='jose';
vegetales[2]='nabo'
console.log(nombre[0]);
console.log(vegetales[2]);
console.log(nombre.length);
for(var i=0; i<=nombre.length-1;i++){
    console.log(nombre[i]);
}
vegetales.forEach(function(elemento,indice){
    console.log(elemento,indice);
})*/