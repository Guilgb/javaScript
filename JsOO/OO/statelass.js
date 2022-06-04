const square = (n, m) => n * m;
console.log(square(4, 2));

const factorial = (numero) => {
    if( numero == 0){
        return 1;
    }
    return numero * factorial(numero - 1);
}

console.log(factorial(0));