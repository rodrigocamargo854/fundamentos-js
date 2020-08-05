const valores = [1, 2, 3, 4, 5, 8, 7];

// Exibindo todos itens de um array
valores.forEach(element => { console.log(element) });

//adicionando itens em uma array
valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

//Deletar o ultimo item do arrays
valores.pop()
console.log(valores)

// verifiviando tipo de variavel
console.log(typeof valores)