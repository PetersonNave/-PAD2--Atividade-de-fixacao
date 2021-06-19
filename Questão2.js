function Calcu (valor1, valor2, callback)
{
    var result = callback(valor1, valor2)
    console.log(result);
}

Calcu(2, 3, function (valor1, valor2){

    var result = valor1 * valor2;
    return result;
   
})
Calcu(2, 3, function (valor1, valor2){

    var result = valor1 - valor2;
    return result;
   
})

Calcu(2, 3, function (valor1, valor2){

    var result = valor1 / valor2;
    return result;
   
})

Calcu(2, 3, function (valor1, valor2){

    var result = valor1 + valor2;
    return result;
   
})


