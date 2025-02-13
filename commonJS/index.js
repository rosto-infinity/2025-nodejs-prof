let { SOMME, PRODUIT } = require("./mathLib.cjs")

const nbr1 = 2125;
const nbr2 = 2215;
console.log(`${nbr1} + ${nbr2} =  ${SOMME(nbr1, nbr2)}`);
console.log(`${nbr1} x ${nbr2} =  ${PRODUIT(nbr1, nbr2)}`);
