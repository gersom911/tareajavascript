/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

//- La fecha de hoy

const fechaHoy = new Date()
console.log(fechaHoy)

// La fecha de tu nacimiento
const fechaNacimiento = new Date(1979,09,15)
console.log(fechaNacimiento)

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let indica = fechaHoy >fechaNacimiento 
console.log(indica)

//Una variable que contenga el día de tu nacimiento

let diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

let mesNacimiento = fechaNacimiento.getMonth()
console.log(mesNacimiento)

// - Una variable que contenga el año de tu nacimiento (recuerda que Enero es mes 0)
let anioNacimiento = fechaNacimiento.getFullYear()
console.log(anioNacimiento)