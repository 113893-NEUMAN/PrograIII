const obtenerPersonaMayor = function(p1,p2,p3){
    let mayor = p1
    if(p2.edad > p1.edad){
        mayor = p2
    }else{
        if(p3.edad > p2.edad){
            mayor = p3
        }
    } 
    console.log("soy una funcion comun")
    return mayor
}

const obtenerPersonaMayor2 = (p1,p2,p3) => {
    let mayor = p1
    if(p2.edad > p1.edad){
        mayor = p2
    }else{
        if(p3.edad > p2.edad){
            mayor = p3
        }
    } 
    console.log("soy una funcion flecha")
    return mayor
}

const p1 = {
    nombre: 'fede',
    edad: 90
}

const p2 = {
    nombre: 'nico',
    edad: 80
}

const p3 = {
    nombre: 'agos',
    edad: 30
}

console.log(obtenerPersonaMayor(p1,p2,p3))
console.log(obtenerPersonaMayor2(p1,p2,p3))