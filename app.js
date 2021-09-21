const colors = require('colors');

/*
** EJERCICIO 1°
*/

// Declaración de array de números.
var arr = [5, 10, 8, 13, 1, 6, 10];
// Declaración de longitud del arreglo
var num = arr.length;

//Declaración de función para comparar los números
function compareNumbers(arr, num) {
    // Bucle for para recorrer el arreglo
    for (var i = 1; i < num - 1; i++) {
        // Validación, comparamos si el número de la izquierda es mayor al de la izquierda y al contrario 
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1])
            console.log(`El resultado es: ${arr[i]}`);
    }
}
//Se manda llamar la función y le pasamos como parametro el arreglo y la longitud del arreglo
compareNumbers(arr, num);


/*-----------------------------------------*/


/*
** EJERCICIO 2°
*/

// Declaración del objetivo
const encontrar = 8;

// Declaración de arreglo
var numbers = [5, 10, 8, 6, 12];

// Delcaración de variable para calcular el valor absoluto.
const encontrado = numbers.reduce((a, b) => {
    /*
    * Uso de reduce para reducir las opciones de comparación
    * Se retorna la respuesta usando Math.abs() que sirve para 
    * encontrar el valor absoluto y usamos un if ternario para regresar la opción correcta.
    */
    return Math.abs(b - encontrar) < Math.abs(a - encontrar) ? b : a;
});

// Se manda a llamar la arrow function que retorna el valor absoluto.
console.log(`El valor absoluto es: ${encontrado}`.blue);



/*------------------------------*/


/*
** EJERCICIO 3°
*/

// Declaración de arreglo
let palabra = 'AAjdjdso';

// Declaración de función con parametro de variable para procesar el string
function repeatWord(word) {
    // Convertimos el string a un array
    var divisiones = word.split('');
    // Eliminamos los valores repetidos
    let uniqueWords = [...new Set(divisiones)];
    // Imprimimos la respuesta
    console.log(`El resultado es: ${uniqueWords.toString()}`);
}

// Mandamos llamar la función y le pasamos el string.
repeatWord(palabra);