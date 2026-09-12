// Classificando temperatura
// Switch case aplicação

const temperatura = 35

switch (true) {
    case (temperatura < 15):
        console.log('Frio')
        break;
    case (temperatura >= 15 && temperatura < 25):
        console.log('Agradável')
        break;
    default:
        console.log('Quente')
}