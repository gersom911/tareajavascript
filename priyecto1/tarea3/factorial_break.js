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