function createPhrases() {
    var frases = ['ola pessoa', 'ola gafanhoto', 'ola chefia', 'ola burrao']

    for(frase in frases){
        console.log(frases[frase]);
    }
}


const anonima = function(num1, num2){
    sum = num1 + num2;
    return console.log(sum);
}
anonima(2, 3);