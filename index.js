//Criando uma lista de alunos vázia
let alunos = [];

//Criando um co ntador de alunos
let qtd = 0;

//Função Menu
function menu() {
    let opcao;

    do {
        opcao = parseInt(prompt("Selecione uma opção:\n1. Cadastrar aluno\n2. Relatório de alunos em ordem crescente por NOME\n3. Relatório de alunos em ordem decrescente por RA\n4. Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados\n5. Sair"));

        switch (opcao) {
            case 1:
                cadastraUser();
                break;
            case 2:
                // ordenaNome(alunos);
                mostraResposta(ordenaNome(alunos));
                break;
            case 3:
                buscarAluno();
                break;
            case 4:
                removerAluno();
                break;
            case 5:
                console.log("Programa encerrado.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    } while (opcao !== 5);
}

//Função para entrada de dados de alunos
function cadastraUser() {
        //Verificando se o máximo de alunos foi excedido
        if(qtd === 30) {
            alert("Quantidade máxima de alunos na turma (30) ");
            return;
        }

        //Entrada de dados de um aluno
        let nome = prompt("Digite o nome do aluno: ");
        let ra = prompt("Digite o RA desse aluno: ");
        let idade = prompt("Digite a idade desse aluno: ");
        let sexo = prompt("Digite o sexo desse aluno: ");
        let media = prompt("Digite a média desse aluno: ");
        let resultado = prompt("Digite se o aluno é aprovado ou reprovado: ");

        //Criando um objeto de aluno com as informações cadastradas
        let alunoObj = {
            nome,
            ra,
            idade,
            sexo,
            media,
            resultado

        }

        //Inserindo o objeto criado no array de alunos
        alunos.push(alunoObj);

        //Incrementando o contador de alunos
        qtd ++;

    //Encerrando a função
    return
}

function ordenaNome(vetor){
    //Ordenar alunos por ordem alfabética
    let trocou

    do {
        trocou = false

        // Percurso FOR tradicional até a PENÚLTIMA posição do vetor
        for(let i = 0; i < vetor.length - 1; i++) {
            if(vetor[i] > vetor[i + 1]) {
                // Efetua a troca entre os elementos por desestruturação
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true
            }
        }

    } while(trocou)
    
    return vetor;
}

function ordenaAprovados() {
    if (!alunos) {
        alert("TESTE");

        return
    };



}


//Função de mostrar os resultados
function mostraResposta(array) {
    
    // console.log(array.lenght);
    const resultado = document.querySelector('#resposta');  
    resultado.innerHTML = '';   
    
    
    array.forEach(element => {
        const p = document.createElement('p');
        p.innerHTML += `Aluno: ${element.nome} `;
        p.innerHTML += `${element.idade} anos `;
        p.innerHTML += `do sexo ${element.sexo}`;
        
        resultado.appendChild(p);
    });
  
  }
