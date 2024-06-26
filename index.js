//Criando uma lista de alunos vázia
let alunos = [];

//Criando um contador de alunos
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
                mostraResposta(ordenaNome(alunos), "Alunos em ordem alfabética");
                opcao = 5;
            break;
                
            case 3:
                mostraResposta(ordenaRA(alunos), "Alunos em ordem decrescente por RA");
                opcao = 5;
            break;

            case 4:
                mostraResposta(ordenaAprovados(alunos), "Alunos aprovados em ordem alfabética");
                opcao = 5;
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

//1 - Função para entrada de dados de alunos
function cadastraUser() {
        //Verificando se o máximo de alunos foi excedido
        if(qtd === 10) {
            alert("Quantidade máxima de alunos na turma (10) ");
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
    return;
}

//2 - Retornando a lista de alunos por nome crescente
function ordenaNome(array){
    //Verificando se a lista de alunos não está vazia
    if (!array) {
        alert("Nenhum aluno cadastrado !!!");
        
        return;
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

//2.1 - Função de comparação de nomes
function ordenaNomes(a,b) {
    return a.nome > b.nome;

}

//3 - Fynção que retorna lista ordenada por RA decrescente
function ordenaRA(array){
    //Verificando se a lista de alunos não está vazia
    if (!array) {
        alert("Nenhum aluno cadastrado !!!");
        
        return;
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

//3.1 - Função de comparação de RA
function ordenaRAdecrescente(a,b) {
    return a.ra < b.ra
}

//4 - Função que retorna uma lista de alunos aprovados por ordem crescente de nomes
function ordenaAprovados(array) {
    if (!array) {
        alert("Nenhum aluno cadastrado !!!");
        
        return;
    }

    let alunosAp = selecionaAlunosAp(array);
    console.log(alunosAp);

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
        return bubbleSort(alunosAp, ordenaNomes);
    
}

//4.1 - Função que seleciona os alunos aprovados
function selecionaAlunosAp(obj) {
    let teste = [];

    for(let i = 0; i < obj.length; i++) {

        if (obj[i].resultado == 1) {
            teste.push(obj[i]);

        }

    }


    return teste;

}

//Função de mostrar os resultados
function mostraResposta(array, nomeFunc) {

    if (alunos.length == 0) {
        alert("Nenhum aluno cadastrado !!!");
        
        return;
    }
    
    //Selecionando campos do arquivo HTML
    const tbody = document.querySelector('#text');  
    const tr = document.querySelector('#tittle');
    const trName = document.querySelector('#name');

    //Zerando os valores
    tbody.innerHTML = "";
    tr.innerHTML = "";
    trName.innerHTML = "";

    //Criando uma coluna para o nome da Tabela
    const th = document.createElement('th');
    //Zerando esse campo
    th.innerHTML = "";
    //Adicionando um colspan nessa linha
    th.setAttribute('colspan', 6);

    //Setando o valor do nome da tabela
    const p = document.createElement('p');
    p.innerHTML = "";
    p.innerHTML = nomeFunc;

    //Adicionando o nome da tabela no arquivo HTML
    th.appendChild(p);
    trName.appendChild(th);

    //Adicionado os cabeçalhos da tabela
    let title = array[0];
    
    for (const column in title) {
            //Criando os elementos
            const th = document.createElement('th');
            const p = document.createElement('p');

            //Adicionando o texto
            p.innerText = column;
            th.appendChild(p);
            tr.appendChild(th);
    }

    //Listando os elementos dos objetos na tabela
    //Percorrendo o array de objetos
    array.forEach(obj => {
        //Criando uma linha nova
        const tr = document.createElement('tr');
        let i = 0;

        //Correndo os elementos do objetos
        for (const column in obj) {
            //Criando uma coluna
            const td = document.createElement('td');
            const p = document.createElement('p');

            //Colando o texto na coluna
            p.innerText = obj[column]
            td.appendChild(p);
            tr.appendChild(td);     
            
            if(i == 5) {
                if (obj.resultado == 1) {
                    p.innerText = "Aprovado"
                    td.appendChild(p);
                    tr.appendChild(td);

                } else {
                    p.innerText = "Reprovado"
                    td.appendChild(p);
                    tr.appendChild(td);
                }

            }

            i++;
        }
        
        //Adicionando a linha no arquivo HTML
        tbody.appendChild(tr);
    });
  
}