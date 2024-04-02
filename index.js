//Função para entrada de dados de alunos
function cadastraUser() {

    let alunos = [];

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


    for (const value in alunoObj) {
        
    }
    alunos = [ ...alunoObj ];

    console.log(alunos);

    }

    cadastraUser();