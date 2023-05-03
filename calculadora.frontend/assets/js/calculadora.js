$(document).ready(function () {
    //$('.btnc').trigger('click');
    var operador = ''; 
    var coma = true;
    var control = true;
    var numero1 = 0;
    var numero2 = 0;
    $( ".btn0" ).on( "click", function() {
        var valor=$(".btn0").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn1" ).on( "click", function() {
        var valor=$(".btn1").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn2" ).on( "click", function() {
        var valor=$(".btn2").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn3" ).on( "click", function() {
        var valor=$(".btn3").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn4" ).on( "click", function() {
        var valor=$(".btn4").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn5" ).on( "click", function() {
        var valor=$(".btn5").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn6" ).on( "click", function() {
        var valor=$(".btn6").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn7" ).on( "click", function() {
        var valor=$(".btn7").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn8" ).on( "click", function() {
        var valor=$(".btn8").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btn9" ).on( "click", function() {
        var valor=$(".btn9").val();
        $('.historial').append(valor);
        agregaNumeros(valor);
    });
    $( ".btnDiv" ).on( "click", function() {
        control = false;
        coma = true;
        var valor=$(".btnDiv").val();
        $('.btnDiv').attr('disabled', true);
        $('.btnMul').attr('disabled', false);
        $('.btnRes').attr('disabled', false);
        $('.btnSum').attr('disabled', false);
        if($('.resultado').html()!=''){
            numero1=$('.resultado').html();
            $('.resultado').empty();
            $('.historial').empty();
            $('.historial').append(numero1);
            control = false;
        }
        if(operador!=''){
            operador = valor;
            cadena=$('.historial').html();
            cadena = cadena.substring(0, cadena.length - 1);
            $('.historial').empty();
            $('.historial').append(cadena);
            $('.historial').append(valor);
        }else{
            operador = valor;
            $('.historial').append(valor);
        }
        
    });
    $( ".btnMul" ).on( "click", function() {
        var valor=$(".btnMul").val();
        coma = true;
        control = false;
        $('.btnDiv').attr('disabled', false);
        $('.btnMul').attr('disabled', true);
        $('.btnRes').attr('disabled', false);
        $('.btnSum').attr('disabled', false);
        if($('.resultado').html()!=''){
            numero1=$('.resultado').html();
            $('.resultado').empty();
            $('.historial').empty();
            $('.historial').append(numero1);
            control = false;
        }
        if(operador!=''){
            operador = valor;
            cadena=$('.historial').html();
            cadena = cadena.substring(0, cadena.length - 1);
            $('.historial').empty();
            $('.historial').append(cadena);
            $('.historial').append(valor);
        }else{
            operador = valor;
            $('.historial').append(valor);
        }
    });
    $( ".btnRes" ).on( "click", function() {
        var valor=$(".btnRes").val();
        coma = true;
        control = false;
        $('.btnDiv').attr('disabled', false);
        $('.btnMul').attr('disabled', false);
        $('.btnRes').attr('disabled', true);
        $('.btnSum').attr('disabled', false);
        if($('.resultado').html()!=''){
            numero1=$('.resultado').html();
            $('.resultado').empty();
            $('.historial').empty();
            $('.historial').append(numero1);
            control = false;
        }
        if(operador!=''){
            operador = valor;
            cadena=$('.historial').html();
            cadena = cadena.substring(0, cadena.length - 1);
            $('.historial').empty();
            $('.historial').append(cadena);
            $('.historial').append(valor);
        }else{
            operador = valor;
            $('.historial').append(valor);
        }
    });
    $( ".btnSum" ).on( "click", function() {
        var valor=$(".btnSum").val();
        coma = true;
        control = false;
        $('.btnDiv').attr('disabled', false);
        $('.btnMul').attr('disabled', false);
        $('.btnRes').attr('disabled', false);
        $('.btnSum').attr('disabled', true);
        if($('.resultado').html()!=''){
            numero1=$('.resultado').html();
            $('.resultado').empty();
            $('.historial').empty();
            $('.historial').append(numero1);
            control = false;
        }
        if(operador!=''){
            operador = valor;
            cadena=$('.historial').html();
            cadena = cadena.substring(0, cadena.length - 1);
            $('.historial').empty();
            $('.historial').append(cadena);
            $('.historial').append(valor);
        }else{
            operador = valor;
            $('.historial').append(valor);
        }
    });
    $( ".btnDot" ).on( "click", function() {
        if(coma){
            var valor='.';
            $('.historial').append(valor);
            coma = false;
            agregaNumeros(valor)
        }
        
    });
    $( ".btnc" ).on( "click", function() {
        $('.resultado').empty();
        $('.historial').empty();
        control = true;
        coma = true;
        numero1=0;
        numero2=0;
        operador = '';
        $('.btnDiv').attr('disabled', false);
        $('.btnMul').attr('disabled', false);
        $('.btnRes').attr('disabled', false);
        $('.btnSum').attr('disabled', false);
    });
    $( ".btnIgual" ).on( "click", function() {
        var resultadoOperacion = generaResultado(operador, numero1, numero2);
        $('.btnDiv').attr('disabled', false);
        $('.btnMul').attr('disabled', false);
        $('.btnRes').attr('disabled', false);
        $('.btnSum').attr('disabled', false);
        $('.resultado').empty();
        $('.resultado').append(resultadoOperacion);
        control = true;
        coma = true;
        numero1 = 0;
        numero2 = 0;
        operador = '';
    });
    function generaResultado(operador=null, num1=null, num2=null){
        if(operador!=null&&num1!=null&&num2!=null){
            num1=parseFloat(num1);
            num2=parseFloat(num2);
            if(operador=='+'){
                resultado=parseFloat(num1)+parseFloat(num2);
                return resultado
            }else if (operador=='-'){
                resultado=parseFloat(num1)-parseFloat(num2);
                return resultado
            }else if (operador=='*'){
                resultado=parseFloat(num1)*parseFloat(num2);
                return resultado
            }else if(operador=='/'){
                if(num2==0 || num2=='0'){
                    $('.resultado').empty();
                    $('.resultado').append('Error al dividir por cero');                    
                    setTimeout(function () {
                        $('.btnc').trigger('click');
                    }, 1500);
                    return;
                }else{
                    resultado=parseFloat(num1)/parseFloat(num2);
                    return resultado
                }
            }            
        }else{
            $('.resultado').append('Error inesperado');
        }
    }

    function agregaNumeros(valor){
        if(control){
            numero1 +=valor;
        }else{
            numero2 +=valor;
        }
        return
    }
});