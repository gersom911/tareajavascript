const resta = valor => {
    if (typeof valor === "number") {
        return valor -5 
    }
    else {throw new Error("debe colocar un numero")}
}

numero = "a"
try {
    const restar = resta(numero)
    console.log(restar)
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error("ERROR!")
} 
