// const mathLib = require("./mathLib");
// let somme = mathLib.SOMME(4, 12);
// let produit = mathLib.PRODUIT(4, 12);


// console.log(somme);
// console.log(produit);

// const nbr1 = 215;
// const nbr2 = 2215;
// console.log(`${nbr1} + ${nbr2} =  ${mathLib.SOMME(nbr1, nbr2)}`);
// console.log(`${nbr1} x ${nbr2} =  ${mathLib.PRODUIT(nbr1, nbr2)}`);

const mathLib = require("./mathLib");
//Destructuring

let { SOMME, PRODUIT } = require("./mathLib")

const nbr1 = 215;
const nbr2 = 2215;
console.log(`${nbr1} + ${nbr2} =  ${SOMME(nbr1, nbr2)}`);
console.log(`${nbr1} x ${nbr2} =  ${PRODUIT(nbr1, nbr2)}`);
