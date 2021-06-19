function qualMes(valor)
{
   const meses = [
    { mes: 1, nome: "Janeiro" }
    ,{ mes: 2, nome: "Fevereiro" }
    ,{ mes: 3, nome: "Março" }
    ,{ mes: 4, nome: "Abril" }
    ,{ mes: 5, nome: "Maio" }
    ,{ mes: 6, nome: "Junho" }
    ,{ mes: 7, nome: "Julho" }
    ,{ mes: 8, nome: "Agosto" }
    ,{ mes: 9, nome: "Setembro" }
    ,{ mes: 10, nome: "Outubro" }
    ,{ mes: 11, nome: "Novembro" }
    ,{ mes: 12, nome: "Dezembro" }
   ]
    var nomeMes;
meses.forEach(numMes => {

    if(numMes.mes === valor){
        nomeMes = numMes.nome;
    }
    

});
return nomeMes;
}

console.log(qualMes(5))
console.log(qualMes(12))
console.log(qualMes(7))