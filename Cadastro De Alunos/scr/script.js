// // 1° Passo: Crie um array chamado alunos. Dentro desse array devem existir 3 objetos, cada objeto representando um aluno.
// Cada aluno deve ter as seguintes propriedades: nome, idade, curso e nota.

// 2° Passo: Mostre as informações no console ou no alert. A saída deve conter o nome do aluno, curso e nota. Faça isso para todos os alunos do array. 

// 3° Passo: Mostre no console ou no alert quais alunos estão aprovados e quais alunos estão reprovados.

// //Nota maior ou igual a 7 = Aprovado.
// Nota menor que 7 = Reprovado.

let alunos = [
    {nome:"Carlos", idade:19, curso:"Biologia", nota:6},
    {nome:"Eduarda", idade:21, curso:"Biologia", nota:9},
    {nome:"Leticia", idade:19, curso:"Biologia", nota:5}
];

function notas(lista) {
    lista.forEach(aluno => {
        console.log(`Aluno: ${aluno.nome} | Curso: ${aluno.curso} | Nota: ${aluno.nota}`);

        if (aluno.nota >= 7 ) {
            console.log(`Status: ${aluno.nome} está APROVADO(A)!`);
        } else {
            console.log(`Status: ${aluno.nome} está REPROVADO(A)!`);
        }
        
        console.log("-----------------------------");
        
    });
}

notas(alunos);