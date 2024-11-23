// Condicional de Escolha

let tamanho = "grande"
switch (tamanho) {
    case "pequeno":
        console.log('2 biscoitos')
        break;
    case "medio":
        console.log('4 biscoitos')
        break;
        case "grande":
        console.log('6 biscoitos')
        break;
    default:
        console.log('Descubra o tamanho do seu Pet!')
        break;
}

// Condicional If, else

const cachorro = "Maylon"
let estaComfome = false;

if (estaComfome) {
    console.log(`Alimentar o ${cachorro}`)
} else{
    console.log(`O ${cachorro} está de barriga cheia`)
}


let fedido = true;

if (fedido) {
    console.log(`Vou dar banho no ${cachorro}`)
} else{
    console.log(`O ${cachorro} não precisa de banho`)
}