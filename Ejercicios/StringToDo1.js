//Quitar espacios en blanco
/*Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco.
Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".*/
function removerEspaciosBlancos(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log('quitar los espacios en blanco:')
console.log(removerEspaciosBlancos("Pl ayTha tF u nkyM usi c"));
//Obtener dígitos
/*Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado por los 
dígitos de la cadena. Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el número 1357924680.*/
function obtenerDigitos(str) {
    var nums = ('0123456789').split("");
    //console.log(nums);
    var digito = "";
    for (var i = 0; i < str.length; i++) {
        if (nums.includes(str[i])) {
            digito += str[i];
        }
    }
    return digito;
}
console.log('Obtener los digitos:')
console.log(obtenerDigitos("0s1a3y5w7h9a2t4? 6! 8? 0"));

//Acrónimos
/*Crea una función que, dada una cadena, devuelva el acrónimo de la cadena (solo las primeras letras, en mayúscula). 
Dado "no hay almuerzo gratis. Debes pagar por tu comida", devuelve "NHAG-DPPTC".
Dado "¡En vivo desde Nueva York, es sábado por la noche!", devuelve "ENDNYESPLN".*/
function acronimo(str) {
    var acronimo = "";
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        acronimo += arr[i].substr(0, 1).toUpperCase();
    }

    return acronimo;
}
console.log('acronimos:')
console.log('1:', acronimo("no hay almuerzo gratis. Debes pagar por tu comida"));
console.log('2:', acronimo("En vivo desde Nueva York, es sábado por la noche!"));
//Contar no espacios
/*Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena.
Por ejemplo, dado, "Amor, me estás volviendo loca", devuelve 29 (no 35).*/

function Contarnoespacios(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            count++;
        }
    }
    return count;
}
console.log('Contar no espacios ')
console.log(Contarnoespacios('Amor, me estás volviendo loca'));
//Quitar cadenas más cortas
//Dada una matriz de cadenas y un valor (longitud), elimina las cadenas más cortas que la longitud de la matriz.
function quitarcadenasmascortas(array, len) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length >= len) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log('Quitar cadenas más cortas')
console.log(quitarcadenasmascortas(['Hello', 'my', 'name', 'is', "Kevin"], 5));