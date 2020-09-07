const array = [ 1,2,3];
array.push(4);//Inserir item
array[0] =`Luiz`;//Inserir item pelo index


//#########################@@@@@@@@@@@@###################@@@@@@@@@@@@@@@@@@###############
const pessoal = {
    nome: `Luiz`,
    sobreno: `Alcantara`,
    idade: 25

};

console.log(pessoal.nome)
//ou

//factory
const pessoa1 = {
    nome: `Luiz`,
    sobrenome: 'Miranda',
    idade: 25,
    fala()
    {
        console.log(`${this.nome} diz ola para todos`);
    },

    incrementaIdade(x)
    {
        this.idade += x;
        console.log(`A idade atual é ${ pessoa1.idade}`)
    }


    
}

pessoa1.fala();
pessoa1.incrementaIdade(10);
pessoa1.incrementaIdade(2);





