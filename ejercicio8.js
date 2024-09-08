function sumarElementos(array) {
    let suma = 0;
    let indice = 0;

    do {

        suma += array[indice];
        indice++;
    } while (indice < array.length);

    return suma;
}

let miArray = [1, 2, 3, 4, 5];
let total = sumarElementos(miArray);
console.log(`La suma de todos los elementos del array es ${total}.`);
