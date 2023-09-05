/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let numeros = [];

for (let i = 1; i <= 8; i+=2) {
  numeros.push(i);
}

let result = numeros.map(function(numeros){
    return numeros;
});

console.log(result.sort(function(a, b){return b - a}));


//export result
module.exports = result;