var op1;
var op2;
var op;
//hicimos la funcion init
function init(){
    //dentro de ella obtuvimos los elementos para poder crear las operaciones y accedimos a los numeros

    var res=document.getElementById('resultado');
    var siete=document.getElementById('siete');
    var ocho=document.getElementById('ocho');
    var nueve=document.getElementById('nueve');
    var divi=document.getElementById('division');
    var cuatro=document.getElementById('cuatro');
    var cinco=document.getElementById('cinco');
    var seis=document.getElementById('seis');
    var multi=document.getElementById('multiplicacion');
    var uno=document.getElementById('uno');
    var dos=document.getElementById('dos');
    var tres=document.getElementById('tres');
    var resta=document.getElementById('resta');
    var igual=document.getElementById('igual');
    var reset=document.getElementById('reset');
    var cero=document.getElementById('cero');
    var suma=document.getElementById('suma');

    // Asignamos un evento a cada numero mediante una funcion 
    uno.onclick=function (e){
        res.textContent=res.textContent+"1";
    }
    dos.onclick=function(e){
        res.textContent=res.textContent+"2";
    }
    tres.onclick=function(e){
        res.textContent=res.textContent+"3";
    }
    cuatro.onclick=function(e){
        res.textContent=res.textContent+"4";
    }
    cinco.onclick=function(e){
        res.textContent=res.textContent+"5";
    }
    seis.onclick=function(e){
        res.textContent=res.textContent+"6";
    }
    siete.onclick=function(e){
        res.textContent=res.textContent+"7";
    }
    ocho.onclick=function(e){
        res.textContent=res.textContent+"8";
    }
    nueve.onclick=function(e){
        res.textContent=res.textContent+"9";
    }
    cero.onclick=function(e){
        res.textContent=res.textContent+"0";
    }
    reset.onclick=function(e){
        reseting();
    }
    suma.onclick=function(e){
        op1=resultado.textContent;
        op='+';
        clean();
        console.log(op1);
    }
    resta.onclick=function(e){
        op1=resultado.textContent;
        op='-';
        clean();
        console.log(op1);
    }

    multi.onclick=function(e){
        op1=resultado.textContent;
        op='*';
        clean();
        console.log(op1);
    }
    divi.onclick=function(e){
        op1=resultado.textContent;
        op='/';
        clean();
        console.log(op1);
    }
    igual.onclick=function(e){
        op2=resultado.textContent;
        solve();
    }

}
// iniciar en ceros la calculadora
function reseting(){
    resultado.textContent="";
    op1=0;
    op2=0;
    op="";
}
// funcion para limpiar la pantalla de la calculadora
function clean(){
    resultado.textContent="";
}
// Aqui se hacen las operaciones 
function solve(){
    var result=0;

    switch (op) {
        case '-':
           result=parseFloat(op1)-parseFloat(op2); 
            break;

        case '+':
            result=parseFloat(op1)+parseFloat(op2); 
            break;
        case '*':
            result=parseFloat(op1)*parseFloat(op2); 
            break;
        case '/':
            result=parseFloat(op1)/parseFloat(op2); 
            break;

        default:
            break;
    }

    clean();
    resultado.textContent=result;
}