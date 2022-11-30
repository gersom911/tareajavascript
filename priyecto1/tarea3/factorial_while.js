let numero = 10 
if (numero<0){
    console.log("el factorial del número no exite")
} 
else if(numero===0){
    console.log("el factorial es 1")
} 
else {
     factorial = 1
     while (numero>0){
        factorial = factorial * numero
     numero = numero - 1

     }
     console.log(factorial)

}