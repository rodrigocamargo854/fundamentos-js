function imprimirSoma(a, b) {
    console.log(a + b)
}

function imprimirMultiplica(a, b) {
    console.log(a * b)
}

function imprimirSub(a, b) {
    console.log(a - b)
}

function imprimirdiv(a, b) {
    console.log(a / b)
}


function fatorial(a)

{
    let count = 1
    for (let i = 1; i < a; i++) {
        count = count * a
    }

    console.log(count)
}

imprimirSoma(2, 3)
imprimirMultiplica(2, 3)
imprimirSub(2, 3)
imprimirdiv(2, 3)
fatorial(3)

// caso não seja passado um dos valores, o outro fica como undefined

console.clear()

//Valor padrao para variavel na chamada da funcao
// quando a funçao retorna algo é preciso inserir no console.log

function soma(a, b = 0) {
    return (a + b)
}

console.log(soma(3, 5))
console.log(4)