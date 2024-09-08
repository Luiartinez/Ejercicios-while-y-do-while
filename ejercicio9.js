function generarFibonacciHasta(maximo) {
    let fibonacci = [];
    let a = 0;
    let b = 1;

    fibonacci.push(a);

    while (b <= maximo) {
        fibonacci.push(b);
        let siguiente = a + b;
        a = b; 
        b = siguiente;
    }

    return fibonacci;
}

let maximo = 20;
let secuenciaFibonacci = generarFibonacciHasta(maximo);
console.log(`Secuencia de Fibonacci hasta el número ${maximo}:`, secuenciaFibonacci);
