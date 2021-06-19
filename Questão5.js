
function Teste(valor1, valor2, callback)
{
    return callback(valor1, valor2)
}


console.log(Teste(20, 12, function(valor1, valor2)
{
if(valor1 >= valor2)
{
    var retorno = valor1 + " É maior ou igual ao " + valor2;
    return retorno;
}else{
    var retorno = valor1 + " Não é maior ou igual ao " + valor2;
 return retorno;
}

}))