/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
const array = ["foo","bar","baz","qux","echo"];
let result = [];
let gaby = [];

for (let i=1; i<=3; i++){
    gaby.push(array[i]);
}

for (i of gaby){
    if(i.includes("a")){
        i=i.replace("a","@");
        result.push(i);
    }
    if(i=="qux"){
        i=i.toUpperCase();
        result.push(i);
    }
}


console.log(result);
//export result
module.exports = result;