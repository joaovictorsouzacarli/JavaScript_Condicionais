// Verificar se estudante receberá o bônus na nota
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas

const nome = 'Roberta'
const nota = 8.5
const faltas = 1;

if (nota >= 8  && faltas <= 2) {
    console.log(`Parabéns ${nome}! Você recebeu um bônus!`)
} else {
    console.log(`Infelizmente ${nome}! Você não recebeu bônus!`)
}