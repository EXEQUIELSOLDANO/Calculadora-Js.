const botondenumeros = document.getElementsByName('data-number');
const botonopera = document.getElementsByName('data-opera');
const botonigual = document.getElementsByName('data-igual')[0];
const botondelete= document.getElementsByName('data-delete')[0];
var result= document.getElementById('result');
var opActual= '';
var opAnterior='';
var operacion=undefined;


botondenumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
    agregrarnumero(boton.innerText);
    })
});
botonopera.forEach(function(boton){
    boton.addEventListener('click', function(){
        SelectOperacion(boton.innerText);
    })
});
botonigual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});
botondelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});
function SelectOperacion(op){
    if(opActual === '') return;
    if(opAnterior !== ''){
        calcular();
    }
    operacion= op.toString();
    opAnterior= opActual;
    opActual='';
}
function calcular(){
    var calculo;
    const anterior= parseFloat(opAnterior);
    const actual = parseFloat(opActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo= anterior+actual;
            break;
        case '-':
            calculo= anterior-actual;
            break;
        case 'X':
            calculo= anterior * actual;
            break;
        case '/':
            calculo= anterior / actual;
            break;
        default:
            return;
    }
    opActual= calculo;
    operacion=undefined;
    opAnterior='';
}
function agregrarnumero(num){
    opActual=opActual.toString() +num.toString();
    actualizarDisplay();
}
function clear(){
    opActual='';
    opAnterior='';
    operacion=undefined;
}
function actualizarDisplay(){
    result.value=opActual;
}
clear();