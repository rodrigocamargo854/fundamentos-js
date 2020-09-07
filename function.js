function saudacao(nome)
{
return `Bom dia ${nome}`;
}

console.log(saudacao(`Rodrigo`));


const raiz = function(n)
{
   return n** 0.5

};// terminar com ; pq uma const recebe uma função

console.log(`O Valor da raiz quadrada de 9 é ${raiz(9)} `);

//Arrow function

const raiz =  n => n**0.5;// qunado temos apenas um parâmentro.
