/*
Crea un nuevo fichero JS que contenga las siguientes líneas

- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos*/

class Estudiante{
    constructor (nombre) {
        this.nombre = nombre
        this.asignatura =["javascript","HTML", "CSS"]
      }

    obtendDatos()
    {
        const objeto_estudiante ={nombre:this.nombre, asignaturas:this.asignatura}
        return objeto_estudiante 
    }

}
const nuevoEstudiante = new Estudiante("gersom")
console.log(nuevoEstudiante.obtendDatos())