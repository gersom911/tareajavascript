/*def factorial(num): 
    if num < 0: 
        print("Factorial of negative num does not exist")

    elif num == 0: 
        return 1
        
    else: 
        fact = 1
        while(num > 1): 
            fact *= num 
            num -= 1
        return fact 

num = 5; 

print("Factorial of",num,"is", factorial(num))*/

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

 
factorial2=1
for (i=1; i <11; i++)
    {
        factorial2 = factorial2 * i
        

     }
     console.log(factorial2)

     

//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

lista = [1,2,3,4,5,10,6,7,8,9]

for(let valor of lista){
    if (valor != 10){
        continue
        }
    else {
        factorial3 = 1
        while (valor>0){
           factorial3 = factorial3 * valor
           valor = valor - 1
   
        }
        console.log(factorial3)
        break

        }
}
