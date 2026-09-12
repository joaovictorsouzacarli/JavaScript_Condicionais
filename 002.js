// Localizar o nível de bônus de acordo com a faixa salarial
// Ex: R$11000 e acima: 3% bônus
// Ex: R$10999 a R$7000: 5% bônus
// Ex: R$6999 a R$4000: 7% bônus
// Ex: R$3999 p baixo: 10% bônus

const salario = 1000
if (salario >= 11000) {
    console.log('O bônus é de 3%') }
else if (salario < 11000 && salario >= 7000) {
    console.log('O bônus é de 5%') }
else if (salario < 7000 && salario >= 4000) {
    console.log('O bônus é de 7%')
}
else {
    console.log('O bônus é de 10%')
}


