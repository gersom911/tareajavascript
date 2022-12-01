 /*
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = { nombre: "Gersom David", edad : 39, altura:1.80, eresDesarrollador:true }
// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = datosPersonales.edad
console.log(edad)
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const amigos = [
    { nombre: "Gersom David", edad : 43, altura:1.80, eresDesarrollador:true },
    { nombre: "jefrey la rosa", edad : 38, altura:1.75, eresDesarrollador:true },
    { nombre: "angelo joao ", edad : 49, altura:1.79, eresDesarrollador:false }
]
// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const amigosOrdenados= amigos.sort((a, b) => a.edad - b.edad)
console.log(amigosOrdenados)
