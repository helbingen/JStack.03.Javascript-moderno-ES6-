const tech = "Node.js";
const array = ["Node.js", "React", "TypeScript"];
const includesString = tech.includes("Node"); //busca dentro da string o parametro dentro do include
const includesArray = array.includes("Node.js"); // busca dentro do array o parametro do inclue
//ambos casos são case sensitives, com a diferença que na String é possível buscar parte da palavra, e no array não, no array tem que buscar pelo texto completo da posição.
//valor retornado é true ou false;

const startsWith = tech.startsWith("N"); //busca se a string começa com o valor passado pelo parametro
const endsWith = tech.endsWith("s"); // busca se a string termina com o valor passado pelo parametro
console.log(includesArray);
console.log(includesArray);
console.log(startsWith);
console.log(endsWith);
