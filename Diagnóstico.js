//1
var nombre = "Junior"
var edad = 15
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`)

//2
let num1 = parseFloat(prompt("Ingrese un número"))
let num2 = parseFloat(prompt("Ingrese un número"))
suma = num1 + num2
alert(suma)

//3
let numero1 = 5
let numero2 = 11
console.log(numero1 == numero2)
console.log(numero1 != numero2)
console.log(numero1 > numero2)

//4
let base = parseFloat(prompt("Ingrese la base del triángulo"))
let altura = parseFloat(prompt("Ingrese la altura del triángulo"))
area = (base * altura) / 2
alert(area)

//5
let x = 12
if (x<10){
    console.log("El número es menor a 10")
}
else if (x >= 10 && x <= 50){
    console.log("El número está entre 10 y 50")
}
    else{
        console.log("El número es mayor a 50")
    }


//6
var a = 4
var b = 7
var c = 10
function promedio(a, b, c){
    let sumaNumeros = a + b +c
    var promedio = sumaNumeros / 3
    console.log(`El promedio de los números es: ${promedio}`)
}
promedio(a, b, c)

//7
var pelicula={
    nombre: "Entrevista con el vampiro",
    año: "1991",
    duracion: "124 minutos"
}
console.log(pelicula)