const listanome = {
    nome: "Guilherme",
    idade: 19
}

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.forEach(function(nome) {
    console.log('[forEach]', nome);
})

console.log("+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_")

nomes.forEach(info => console.log(nomes[info]));


console.log("+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_")
const casas = ["minha", "vo", "mãe"];
for(let i=0; i< casas.length; i++){
    console.log('[for]', nomes[i]);
}; 

for(let info in casas){
    console.log('minha ' + casas[info]);
}

var global = 'usadas para escopo global'
let local = 'usadas para escopo local for(let i=0 ...)'
const definido = 'o escopo tem q ser definido'


console.log("+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_")
const arrei = {
    nome: 'Gui',
    idade: '23',
    endereco: {
        rua: 'sao jose',
        numero: '1136',
    }
}
console.log(arrei.endereco.numero);
