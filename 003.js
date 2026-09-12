// Verificar se o ano é bissexto
// Um ano é bissexto deve ser divisível por 4 mas NÃO divisível por 100
// ou
// deve ser divisível por 100 e por 400

const ano = 2022;

if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log('O', ano, 'é bissexto')
} else {
    console.log('O', ano, 'não é bissexto')
}