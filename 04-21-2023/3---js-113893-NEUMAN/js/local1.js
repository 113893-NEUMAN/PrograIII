// Primera forma de crear objetos
const Juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    fechaNacimiento: new Date(1998,3,21),
    saludar: function(){
        console.log("Hola soy juan")
    }
}

console.log(Juan)
console.log(Juan.saludar())

// Segunda forma de crear objetos
const Persona2 = new Object()
Persona2.nombre = "Federico"
Persona2.apellido = "Neuman"
Persona2.fechaNacimiento = new Date(1998,3,21)
Persona2.saludar = function(){
     console.log("Hola me llamo Fede")
}

console.log(Persona2)
console.log(Persona2.saludar())