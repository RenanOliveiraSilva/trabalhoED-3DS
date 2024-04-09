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
                mostraResposta(ordenaNome(alunos));
                opcao = 5;
            break;
                
            case 3:
                mostraResposta(ordenaRA(alunos));
                opcao = 5;
            break;

            case 4:
                mostraResposta(selecionaAlunosAp(alunos));
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

//2 - Retornando a lista de alunos por nome crescente
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

//2.1 - Função de comparação de nomes
function ordenaNomes(a,b) {
    return a.nome > b.nome
}

//3 - Fynção que retorna lista ordenada por RA decrescente
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

//3.1 - Função de comparação de RA
function ordenaRAdecrescente(a,b) {
    return a.ra < b.ra
}

//4 - Função que retorna uma lista de alunos aprovados por ordem crescente de nomes
function ordenaAprovados(array) {
    let alunosAp = selecionaAlunosAp(array);

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
    let alunosAp = [];

    for(let i = 0; i < obj.length; i++) {

        if (obj[i].resultado == 1) {
            alunosAp.push(obj[i]);

        }

    }

    return alunosAp;

}

//Função de mostrar os resultados
function mostraResposta(array) {
    
    // const resultado = document.querySelector('#resposta');  
    // resultado.innerHTML = '';   
    
    const tbody = document.querySelector('#text');  
    
    array.forEach(obj => {
        const tr = document.createElement('tr');  

            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const td6 = document.createElement('td');

            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const p4 = document.createElement('p');
            const p5 = document.createElement('p');
            const p6 = document.createElement('p');

            p1.innerText = obj.nome;
            p2.innerText = obj.ra;
            p3.innerText = obj.idade;
            p4.innerText = obj.sexo;
            p5.innerText = obj.media;
            p6.innerText = obj.resultado;

            td1.appendChild(p1);
            td2.appendChild(p2);
            td3.appendChild(p3);
            td4.appendChild(p4);
            td5.appendChild(p5);
            td6.appendChild(p6);
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        
        tbody.appendChild(tr);
    });

    // array.forEach(element => {
    //     const p = document.createElement('p');
    //     p.innerHTML += `Aluno: ${element.nome}; `;
    //     p.innerHTML += `${element.idade} anos; `;
    //     p.innerHTML += `do sexo ${element.sexo}; `;
    //     p.innerHTML += `RA: ${element.ra}`;
        
    //     resultado.appendChild(p);
    // });


  
  }
