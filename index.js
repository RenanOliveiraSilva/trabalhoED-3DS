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
                mostraResposta(arrayDeExemplo);
                // mostraResposta(ordenaNome(alunos));

                break;
            case 3:
                mostraResposta(ordenaRA(alunos));
                break;
            case 4:
                console.log("passei aq")
                selecionaAlunosAp(alunos);

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
        let resultado = prompt("Digite se o aluno é 1 - aprovado ou 0 - reprovado: ");

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

//Retornando a lista de alunos por nome crescente
function ordenaNome(array){
    //Verificando se a lista de alunos não está vazia
    if (!array) {
        alert("Nenhum aluno cadastrado !!!");
        
        return
    }

    //Ordenando os nomes em ordem crecente
    function bubbleSort(vetor, fnComp) {
        let trocou;
        
        do {
           
            trocou = false;
        
            for (let i = 0; i < vetor.length - 1; i++) {
                
                if (fnComp(vetor[i], vetor[i + 1])) {
                    [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
                    trocou = true;
                    
                }
            }

        } while (trocou);

        return vetor;
    }

    //Retornando o valor
    return bubbleSort(array, ordenaNomes);
    
}

//Função de comparação de nomes
function ordenaNomes(a,b) {
    return a.nome > b.nome
}

function ordenaRA(array){
    //Verificando se a lista de alunos não está vazia
    if (!array) {
        alert("Nenhum aluno cadastrado !!!");
        
        return
    }

    //Ordenando os alunos pelo RA em ordem decrescente
    function bubbleSort(vetor, fnComp) {
        let trocou;
        
        do {
           
            trocou = false;
        
            for (let i = 0; i < vetor.length - 1; i++) {
                
                if (fnComp(vetor[i], vetor[i + 1])) {
                    [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
                    trocou = true;
                    
                }
            }

        } while (trocou);

        return vetor;
    }

    //Retornando o valor
    return bubbleSort(array, ordenaRAdecrescente);
}

//Função de comparação de RA
function ordenaRAdecrescente(a,b) {
    return a.ra < b.ra
}

function ordenaAprovados() {
    let alunosAp = selecionaAlunosAp();
}


//Função que seleciona os alunos aprovados
function selecionaAlunosAp(obj) {
    let alunosAp = [];

    for(let i = 0; i < obj.length; i++) {

        console.log("aluno "+ obj[i].resultado);
        if (obj[i].resultado == 1) {
            alunosAp.push(obj[i]);

        }

    }

    console.log(alunosAp);

}


    


//Função de mostrar os resultados
function mostraResposta(array) {
    
    // console.log(array.lenght);
    const resultado = document.querySelector('#resposta');  
    resultado.innerHTML = '';   
    
    const cardRelatorio = document.getElementById('resposta');
    // Limpa qualquer conteúdo anterior no card de respostas
    cardRelatorio.innerHTML = '';
    
    array.forEach(element => {
        const p = document.createElement('p');
        p.innerHTML += `Aluno: ${element.nome}; `;
        p.innerHTML += `${element.idade} anos; `;
        p.innerHTML += `do sexo ${element.sexo}; `;
        p.innerHTML += `RA: ${element.ra}`;
        
        resultado.appendChild(p);
    });
  
  }

  // Função para exibir os relatórios
function exibirRelatorio(titulo, resultados) {
    const tituloRelatorio = document.getElementById('tituloRelatorio');
    tituloRelatorio.innerText = titulo;

    const respostaCard = document.getElementById('resposta');
    respostaCard.innerHTML = '';

    resultados.forEach(resultado => {
        const p = document.createElement('p');
        p.innerHTML = resultado;
        respostaCard.appendChild(p);
    });

    document.getElementById('cardRelatorio').style.display = 'block';
}
const arrayDeExemplo = [
    { nome: 'Exemplo1', idade: 20, sexo: 'Masculino', ra: '12345' },
    { nome: 'Exemplo2', idade: 25, sexo: 'Feminino', ra: '67890' }
];
mostraResposta(arrayDeExemplo);
