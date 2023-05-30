//shows in terminal
// const amount = 12;

// if (amount >= 12){
//     console.log('large number')
// }
// else if (amount < 12){
//     console.log('small number')
// }

// console.log('hey its my first node app');

const names = require('./4-names');
const sayHi = require('./5-utils');
const addValues = require('./7-mind-grenade'); //addvalues is invoked in this module, and will appear even if the function is not invoked here
console.log('names', names);

sayHi(names.john);
sayHi(names.peter);

console.log('addValue',addValues);
