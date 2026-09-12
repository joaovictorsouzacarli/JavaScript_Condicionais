// Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:
// Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
// Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
// Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto". //

const idade = 19

switch (true) {
    case (idade < 12):
        console.log('Infantil')
        break;
    case (idade >= 12 && idade < 18):
        console.log('Juvenil')
        break;
    default:
        console.log('Adulto')
}