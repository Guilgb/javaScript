console.log('Pedir Comida')

let aceitar = false;

const promessa = new Promise((resolve, reject) => {
    if(aceitar == true){
        return resolve('Pedido Aceito');
    }
    else{
        return reject('Pedido Negado')
    }
})

console.log('Aguardando')
promessa
    .then(result => console.log(result))
    .catch( erro => console.log(erro)) // obrigatorio tem o cath no reject
    .finally(() => console.log('Pedido Finalizado'))
