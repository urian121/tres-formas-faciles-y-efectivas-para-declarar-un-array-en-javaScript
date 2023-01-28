/**
 * Las formas más COMUNES y RECOMENDADAS para declarar un array JAVASCRIPT
*/


/*
* 1. La primera forma es através del Constructor Array; es decir de forma primitiva, 
*    esta manera es más tradicional y se ha utilizado desde el principio de javaScript, 
*/
let arrayLetras = new Array('element1', 'element2', 'a', 'u', 5, false);
arrayLetras.forEach((elemento)=>{
    console.log(`Soy ${elemento}`);
});

console.log('--------------------------');
/**
 * 2. Usando la Palabra reservada Array
 */
let miArray = Array('banana','carro','php','Urian','30','2023-01-27');
miArray.forEach((e)=>{
console.log(e);
});

console.log('--------------------------');

/**
 * 3. La segunda forma es utilizando Función
*/

let arrayF = Array.of(5, 9, 'Arroz', 'Lapto') ;
arrayF.forEach((f)=>{
    console.log(`Soy: ${f}`);
});

console.log('--------------------------');
/**
 * 4. La tercera forma, la es MODERNA y RECOMENDAD es usando Corchetes [],
 *    esta suele ser más corta y fácil de leer
*/

const lenguajes = ['php','nodeJS','python','elemento x'];
lenguajes.forEach((arrrayL)=>{
    console.log(arrrayL);
});



//Declarando un array Vacio
let a = new Array();
let b = Array();
let c = [];
