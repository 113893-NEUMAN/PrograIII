const numeros = [1,445,23,67,34,23,4]

// Filtro los que son mayores a 10 (crea un nuevo array)
const mayoresA10 = numeros.filter((e) => e > 10)

console.log("Todos los numeros son: " + numeros)
console.log("Los numeros mayores a 10: " + mayoresA10)

// Multiplico todos los elementos por 10 (crea un nuevo array)
const numerosX10 = numeros.map((e) => e*10)
console.log("Todos los numeros son: " + numeros)
console.log("Los numeros multiplicado por 10: " + numerosX10)