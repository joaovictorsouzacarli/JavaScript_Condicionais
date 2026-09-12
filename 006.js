// Criar um fluxo que identifica o tipo de usuário e comunica de acordo
// Ex:
// Usuário free tem acesso limitado ao app
// Usuário premium tem acesso a todas as funções
// Usuário super premium tem acesso total!

const user = 'free'

switch (user) {
    case 'free':
        console.log('Você tem acesso limitado ao app!')
        break;
    case 'premium':
        console.log('Você tem acesso a todas as funções!')
        break;
    case 'super premium':
        console.log('Você tem acesso total!')
        break;
    default:
        console.log('Tipo de usuário inválido!')

}