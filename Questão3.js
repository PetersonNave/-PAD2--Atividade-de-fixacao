function IsDivis (valor, callback){


    return teste(2) 
    
    
     function teste(valor2){
       
return callback(valor, valor2 )


    }
}

var divisivel = IsDivis(10, function(valor, valor2){

    if(valor % valor2 === 0){return true}
    else{
        return false;
    }

})

console.log(divisivel)