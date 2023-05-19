// const array = ['hola', 3.14, true]
// console.log("El array es: " + array)

// const array2 = new Array(3)
// console.log(array2)

const numeros = [1,445,23,67,34,23,4]
console.log("array de numeros: " + numeros)
console.log("primer numero: " + numeros[0])
console.log("indice de error: " + numeros[123])

// agregar un elemento
numeros.push(65)
console.log("array actualizado: " + numeros)

// agregar un elemento en la 1er posicion
numeros.unshift(33)
console.log("de vuelta nuestro todo: " + numeros)
console.log("la cantidad de elementos es: " + numeros.length)