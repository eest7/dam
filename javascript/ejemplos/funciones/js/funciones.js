
/* Ejemplos de declaración o creación de funciones */
    // función sin parametros
    function saludar()
    {
        console.log("Hola!");
    }

    // funciones con parametros y sin retorno (funciones tipo void)
    // estas funciones ejecutan sólo el procedimiento
    // y no devuelven valor, resultado u otra función

    function imprimirMensaje(mensaje)
    {
        console.log("mensaje:"+mensaje);
    }
    
    function sumarDosNumeros(a, b)
    {
        resultado = a + b;
        console.log("resultado:"+resultado); 
    }

    // funciones que retornan un resultado, valor o función

    function sumar(a, b)
    {
        resultado = a + b;
        return resultado
    }

    function restar(a, b)
    {
        resultado = a - b;
        return resultado
    }

    function multiplicar(a,b)
    {
        resultado = a * b;
        return resultado;
    }

    function dividir(a, b)
    {
        resultado = a / b;
        return resultado;
    }

/* Asignación de expresiones funcionales (funciones anónimas) */

    // asignación de funcion sin parámetros
    var saludarPorConsola = function(){
        console.log("soy una funcion asignada a una variable");
    };

    // asignación de funcion con parámetros
    var saludarPorConsolaConParametros = function(mensaje){
        console.log("soy una funcion asignada a una variable e imprimo el mensaje:" + mensaje);
    };

    // asignación de funciones que retornan un resultado, valor o función
    var calcularSuma = function (a, b){
        resultado = a + b;
        return resultado
    };

    var calcularResta = function (a, b){
        resultado = a - b;
        return resultado
    };

    var calcularMultiplicacion = function (a,b){
        resultado = a * b;
        return resultado;
    };

    var calcularDivision = function (a, b){
        resultado = a / b;
        return resultado
    };

    // funciones que invocan otras funciones

    // función que solo ejecuta un procedimiento y no retorna nada
    function calcularPromedio(){
        var resultadoSuma = sumar(3,3);
        var promedio = calcularDivision(resultadoSuma, 2);
        imprimirMensaje("el promedio es: "+ promedio);
    }


    // función que  ejecuta un procedimiento y retorna un resultado
    function calcularPromedioYRestar(){
        var resultadoSuma = sumar(2000,6000);
        var promedio = calcularDivision(resultadoSuma, 2);
        var resultadoResta = restar(promedio, 1000);
        return resultadoResta;
    }