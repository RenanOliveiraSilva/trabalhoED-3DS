let alunos = [];
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
                listarAlunos();
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

    let continuar = 0;

    do{
        if(qtd === 30) {
            alert("Quantidade máxima de alunos na turma (30) ");
            return;
        }

        let nome = prompt("Digite o nome do aluno: ");
        let ra = prompt("Digite o RA desse aluno: ");
        let idade = prompt("Digite a idade desse aluno: ");
        let sexo = prompt("Digite o sexo desse aluno: ");
        let media = prompt("Digite a média desse aluno: ");
        let resultado = prompt("Digite se o aluno é aprovado ou reprovado: ");

        let alunoObj = {
            nome,
            ra,
            idade,
            sexo,
            media,
            resultado

        }

        alunos.push(alunoObj);
        console.log(alunos);

        continuar = parseInt(prompt("Deseja cadastar outro aluno? (0 = sim; 1 = não): "));
        qtd ++;

    }while(continuar != 1)

    return
}

//teste