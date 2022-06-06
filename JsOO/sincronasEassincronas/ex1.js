function imprimirDados(dado){
    console.log('Impressao 1');
    console.log(dado());
}

imprimirDados(function(){
    return 'ola mundo'
})