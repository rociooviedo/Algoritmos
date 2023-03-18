//Reversa
/*Dada una matriz numérica, invierte el orden de los valores, en el lugar. La matriz invertida debe tener 
la misma longitud, con los elementos existentes movidos a otros índices para que el orden de los elementos 
se invierta. Trabajar "en el lugar" significa que no puedes utilizar una segunda matriz; mueve los valores 
dentro de la matriz que se te proporciona. Como siempre, no utilices funciones de matriz integradas como splice().*/
function arrayReversa(arr) {
    var temp;

    for (var i = 0; i < (arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    console.log(arr);
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('reversa')
console.log(arrayReversa(arr1));
//Girar
/*Implementa rotateArr(arr, shiftBy) que acepte matriz y desplazamiento. Desplaza los valores de arr hacia la
derecha en esa cantidad. "Envuelve" cualquier valor que cambie el final de la matriz hacia el otro lado, de modo
que no se pierda ningún dato. Opera en el lugar: dado ([1,2,3], 1), cambia la matriz a [3,1,2]. No uses funciones integradas.

Segundo: permitir shiftBy negativo (shift L, no R).

Tercero: minimiza el uso de memoria. Sin un arreglo nuevo, maneja arreglos/shiftBys en millones.

Cuarto: minimiza los toques de cada elemento.*/

function arraygirar(arr, shiftBy) {
    var temp = arr[arr.length - 1];

    while (shiftBy > 0) {

        for (var i = arr.length - 1; i >= 0; i--) {
            arr[i] = arr[i - 1];
        }

        arr[0] = temp;
        temp = arr[arr.length - 1];
        shiftBy--;
    }
    console.log(arr);
}

var arr1 = [1, 2, 3];
var shift1 = 1;
console.log('girar')
arraygirar(arr1, shift1);
//Rango de filtro
/*Alan es bueno para descifrar códigos secretos. Un método consiste en eliminar los valores que se
encuentran dentro de un rango conocido específico. Dado arr y los valores min y max, conserva solo los valores de
la matriz entre min y max. Trabajo en el lugar:
devuelve la matriz que se te proporcionó con los valores en el orden original. Sin usar funciones de matriz integradas.*/
function arrayRangodeFiltro(arr, min, max) {
    var temp;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {

        }
    }
    console.log(arr);
}
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var min1 = 2;
var max1 = 8;
console.log('rango de filtro')
arrayRangodeFiltro(arr1, min1, max1);
//Concat
/*Replica el concat() de JavaScript. Crea una función independiente que acepte dos matrices. Devuelve una nueva 
matriz que contenga los elementos de la primera matriz, seguida de los elementos de la segunda matriz. 
No alteres las matrices originales. Ej .: arrConcat(['a', 'b'], [1,2]) debería devolver una nueva matriz ['a', 'b', 1,2].*/
function arrayConcat(arr1, arr2) {
    var newArray = [];

    for (var i = 0; i < arr1.length; i++) {
        newArray[i] = arr1[i];
    }
    for (var i = 0; i < arr2.length; i++) {
        newArray[i + arr1.length] = arr2[i];
    }
    console.log(newArray);
}
var arr1 = ["a", "b"];
var arr2 = [1, 2];
console.log('concatenar')
arrayConcat(arr1, arr2);