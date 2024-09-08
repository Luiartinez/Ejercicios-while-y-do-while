let numeros = [1, 2, 3, 2, 4, 2, 5, 6, 2, 7];
let numeroBuscado = 7;
let contador = 0;
let indice = 0; 

while (indice < numeros.length) {
    if (numeros[indice] === numeroBuscado) {
        contador++;
    }
    indice++;
}

console.log(`El número ${numeroBuscado} aparece ${contador} veces en el array.`);