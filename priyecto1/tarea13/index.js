/* 
Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/

//Una cadena de texto con tu Nombre
let nombre = "Gersom"
console.log(nombre )
// Otra cadena de texto con tu Apellido
let apellido = "Cedeño"
console.log(apellido)
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante =" " +  nombre +" "+ apellido  +" "
console.log(estudiante)
// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toLocaleUpperCase()
console.log(estudianteMayus)
//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculaslet estudianteMayus = estudiante.toLocaleUpperCase()
let estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudianteMinus )
//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let numero_letra = estudiante.length
console.log(numero_letra)
//Una variable que contenga la primera letra del Nombre
let primera_letra1 = nombre[0] 
console.log(primera_letra1)
//Otra variable que contenga la última letra del Apellido
let primera_letra2 = apellido[5] 
console.log(primera_letra2)

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudiante_espacio =estudiante.trim()
console.log(estudiante_espacio)
//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let esta = estudianteMinus.match(/gersom/g) 
console.log(esta)

