//Push al frente
/*Dada una matriz y un valor adicional, inserta este valor al principio de la matriz. 
Haz esto sin utilizar ningún método de matriz incorporado.*/
function arrayPushFront(arreglo, val) {
    for (var i = arreglo.length; i > 0; i--) {
        arreglo[i] = arreglo[i - 1];
    }
    arreglo[0] = val;
    console.log(arreglo);
}
console.log('PUSH AL FRENTE');
var arregloPushFrom = [2, 3, 4, 5, 6, 7, 8, 9];
var val1 = 1;
arrayPushFront(arregloPushFrom, val1);

//Pop al frente
/*Dada una matriz, elimina y devuelve el valor al principio de la matriz. 
Haz esto sin utilizar ningún método de matriz incorporado, excepto pop().*/
function arrayPopFront(arreglo) {
    var temp = arreglo[0];
    for (var i = 0; i < arreglo.length; i++) {
        arreglo[i] = arreglo[i + 1];
    }
    arreglo[arreglo.length - 1] = temp;
    return arreglo.pop();
}
console.log('Pop al frente');
var arreglopopfrente = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayPopFront(arreglopopfrente));
//Eliminar en
/*Dada una matriz y un índice en una matriz, elimina y devuelve el valor de la matriz en ese índice. 
Haz esto sin usar métodos de matriz integrados, excepto pop(). Piensa en popFront(arr) como equivalente a removeAt(arr, 0).*/
function arrayRemoveAt(arr, ind) {
    var temp = arr[ind];

    for (var i = ind; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = temp;
    return arr.pop();
}
console.log("Eliminar en",);
var arregloEliminaren = [1, 2, 3, 4, 7, 6, 7, 8, 9];
var ind1 = 5;
console.log(arrayRemoveAt(arregloEliminaren, ind1))
//Pares de intercambio
/**Intercambia posiciones de pares sucesivos de los valores de una matriz dada. Si la longitud es impar, 
no cambies el elemento final. Para [1,2,3,4], devuelve [2,1,4,3]. Por ejemplo, cambia la entrada ["Brendan", verdadero, 42] 
a [verdadero, "Brendan", 42]. 
Al igual que con todos los desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.*/
function arrayIntercambio(arr) {
    var temp;

    for (var i = 0; i < arr.length - 1; i += 2) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    console.log(arr);
}
console.log("Intercambio de matrices");
console.log("CASO  1");
var arr1 = [1, 2, 3, 4];
arrayIntercambio(arr1);

console.log("CASO 2");
var arr2 = ["Brendan", true, 42];
arrayIntercambio(arr2);
//Eliminar duplicados
/*Sara está buscando contratar a un desarrollador web increíble y ha recibido postulaciones 
de varias fuentes. Su asistente los ordenó alfabéticamente, pero notó algunos duplicados. 
Dada una matriz ordenada, elimina los valores duplicados. Debido a que los elementos de la matriz ya están en orden,
todos los valores duplicados se agruparán. Al igual que con todos estos desafíos de arreglos, 
hazlo sin utilizar ningún método de arreglo incorporado.*/
function arrayEliminarduplicados(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            for (var j = i; j < arr.length; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length--;
            i--;
        }
    }

    console.log(arr);
}
console.log('Eliminar duplicados')
var arreglo1 = ["Juana", "Julio", "Mario", "Mario", "Rocio", "Rocio", "Tobias"];
arrayEliminarduplicados(arreglo1);

