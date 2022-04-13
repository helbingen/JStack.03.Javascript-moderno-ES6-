const array = [
  { name: "iPhone", price: 5000, quantity: 2 },
  { name: "Macbook Pro", price: 20000, quantity: 1 },
  { name: "Magic Mouse", price: 1000, quantity: 5 },
];

//.find
const find = array.find((product) => product.price > 1000);
//vai buscar todo o array por onde o atributo price é maior que 1000. No primeiro retorno true, a iteração para, e ele armazena o resultado no find
console.log(find);

//.findIndex
const findIndex = array.findIndex((product) => product.name === "Magic Mouse");
//vai buscar todo o array por onde o atributo name é igual a Magic Mouse. No primeiro retorno true, a iteração para, e ele retorna o indice do array
console.log(findIndex);

// .some
const some = array.some((product) => product.price < 1000); //busca se existe algum produto com price menor que 1000, retorno será true ou false;
console.log(some);

//.every
const every = array.every((product) => product.price >= 1000); //busca se todos os prices são maiores que 1000
console.log(every);

//.map
const map = array.map((product) => ({
  //cria uma cópia de um array
  ...product, //usado para criar o array com as mesmas informações e adicionar novos dados
  subtotal: product.quantity * product.price,
}));
console.log(map);

//.filter
const filter = array.filter((product) => product.quantity > 1); //cria um novo array retirando um item que atenda a condição da função de callback
console.log(filter);

// .reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + product.price * product.quantity; //faz o somatório de cada resultado do price * quantity do array. É um acumulador, parecido com o acumulador do ForEach
}, 0);
console.log(reduce);
