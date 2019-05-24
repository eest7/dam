/* Ejemplos de invocación de funciones */

    // función sin parametros
    console.log("------------- ejemplo 1: función sin parametros --------------");
    saludar();

    // funciones con parametros y sin retorno (funciones tipo void)
    // estas funciones ejecutan sólo el procedimiento
    // y no devuelven valor, resultado u otra función
    console.log("------------- ejemplo 2: funciones con parametros y sin retorno --------------");
    imprimirMensaje("Esto es una invocación");
    
    sumarDosNumeros(2,4);
    
    

    // funciones que retornan un resultado, valor o función
    console.log("------------- ejemplo 3: funciones que retornan un resultado, valor o función --------------");
    var resultadoSuma = sumar(3,5);
    console.log("resultado de suma:"+resultadoSuma);

    var resultadoResta = restar(3,5);
    console.log("resultado de resta:"+resultadoResta);

    var resultadoMultiplicacion = multiplicar(2,2);
    console.log("resultado de multiplicacion:"+resultadoMultiplicacion);

    var resultadoDivision = dividir(2,2);
    console.log("resultado de division:"+resultadoDivision);

    // funciones anónimas
    console.log("------------- ejemplo 4: funciones anónimas --------------");

    var resultadoSuma = calcularSuma(3,5);
    console.log("resultado de suma:"+resultadoSuma);

    var resultadoResta = calcularResta(3,5);
    console.log("resultado de resta:"+resultadoResta);

    var resultadoMultiplicacion = calcularMultiplicacion(2,2);
    console.log("resultado de multiplicacion:"+resultadoMultiplicacion);

    var resultadoDivision = calcularDivision(2,2);
    console.log("resultado de division:"+resultadoDivision);

    // funciones que invocan otras funciones
    console.log("------------- ejemplo 5: funciones que invocan otras funciones --------------");
    
    // función que solo ejecuta un procedimiento y no retorna nada
    calcularPromedio();
    
    // función que  ejecuta un procedimiento y retorna un resultado
    var resultadoDealcularPromedioYRestar = calcularPromedioYRestar();
    console.log("resultado de promedio y restar: "+resultadoDealcularPromedioYRestar);

    // usar el valor de retorno de una función como entrada de otra función

    var resultadoOperacionUno = restar(sumar(100, 50), 150);
    console.log("sumo y luego resto, resultado: "+ resultadoOperacionUno);

    var resultadoOperacionDos = dividir(calcularMultiplicacion(restar(sumar(100, 60), 150), 10), 4);
    console.log("calculo multiple, resultado: "+ resultadoOperacionDos);

    console.log("uso la funcion que imprime un mensaje en consola. Esta invocacion encadenada muestra el resultado de la operacion completa");
    imprimirMensaje(dividir(calcularMultiplicacion(restar(sumar(100, 60), 150), 10), 100));