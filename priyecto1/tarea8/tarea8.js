/*
- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/



// - Una función sin parámetros que devuelva siempre "true"
const cierto = valor => true
console.log(cierto())



var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Hola');
    }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value);
  });
  
  console.log(myPromise);


//Una función generadora de índices pares automáticos

function* generaIndice(){
    let indice_par = 0
    while(true){
        indice_par= indice_par + 2
        
        if (indice_par === 20) {
            return indice_par
        }
        yield indice_par

    }
}

const gen = generaIndice();

console.log(gen.next().value)
console.log(gen.next().value)