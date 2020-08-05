//Armazenando uma funcao dentro de uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(4, 5)


//Armazenando a função arrow em uma constante
const soma = (a, b) => {
    console.log(a + b)
}

soma(4, 3)

//Podemos tambem fazer o retorno implicito com o arrouw e retornará o mesmo resultado 
const Soma = (a, b) => (a + b)
Soma(3, 4)

const imprimir2 = a => console.log(a)
imprimir2("Legal")