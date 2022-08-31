

var num1 = parseInt(prompt("Digite primeiro número"))
console.log("Primeiro Número :",num1)
var num2 = parseInt(prompt("Digite segundo número"))
console.log("Segundo Número :",num2)

CalcularMedia(num1, num2)
function CalcularMedia(num1, num2) {

    console.log("Média será calculada aqui")
    console.log((num1 + num2) / 2)
}