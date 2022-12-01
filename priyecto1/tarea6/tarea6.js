/*+
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/
//  Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompra = ["pasta","arroz","huevos","carne","pescado"]

console.log(listaCompra)
//- Modifica la lista de la compra y añádele "Aceite de Girasol"

const count = listaCompra.push("aceite de girasol")

console.log(listaCompra)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

const eliminarUltimo = listaCompra.pop()

console.log(listaCompra)

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculas = [
    { titulo: 'El regalo', director : 'Joel Edgerton', fecha: 2015},
    { titulo: 'La Pasión de Cristo', director : 'Mel Gibson', fecha: 2004},
    { titulo: 'Adiós pequeña adiós', director : 'Ben Affleck', fecha: 2007},
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 

const  peliculasAnteriores = peliculas.filter(obj => obj.fecha<2010)

console.log(peliculasAnteriores)



// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores= peliculas.map((obj,indice )=> `${indice + 1} -> ${obj.director}`)

console.log(directores)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const tituloPelicula= peliculas.map((obj,indice )=> `${indice + 1} -> ${obj.titulo}`)

console.log(tituloPelicula) 

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const union = directores.concat(tituloPelicula)

console.log(union) 

//  Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const unionPropagacion = [...directores, ...tituloPelicula]

