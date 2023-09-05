/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let i = 1;

while (i <= 8) {
  result.push(i);
  i+=2;
}

console.log(result.sort(function(a, b){return b - a}));

//export result
module.exports = result;