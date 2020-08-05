//constante + identificador
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// Verificando se a constante é uma string

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

//media
const total = ((avaliacao1 * peso1) + (avaliacao1 * peso2)) / 3

// limitando o numero de casas para 2
console.log(total.toFixed(2))
console.log(typeof media)