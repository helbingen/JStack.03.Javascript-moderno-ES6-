function minhaFunction() {
  this.name = "Daniel";
  //Na função comum, o this é criado com contexto de dentro da função
  const minhaArrowFunction = () => {
    this.lastname = "Silva";

    //Na arrow function o this é criado no contexto em que a arrow function foi criada. Nesse caso o this pertence a função acima. Caso seja executado de forma isolada, o this passa a ser o próprio node (backend) ou o objeto window (frontend)
  };
  minhaArrowFunction();
}
console.log(new minhaFunction());
console.log(this);

//--------------------------------------------------------------------------------//

function soma() {
  console.log(arguments);
  //arguments é utilizado caso eu queria utilizar a quantidade de parâmetros dimânico numa função, pode ter 0 argumentos a vários argumentos.

  //Também é possível utilizar a sintaxe function soma(...argumentos){}, para argumentos dimânico em função
}
const arrowSoma = (...argumentos) => {
  console.log(argumentos);
};

soma(1, 2, 3, 4, 5, 6, 7, "Daniel");
arrowSoma(1, 2, 3, 4, 5, 6, 7, "Daniel");

const arrow = () => {
  return "teste";
};
const arrow = () => ({
  nome: "teste",
  id: 1,
}); //ao utilizar parenteses no corpo da arrow function, é possível emitir a palavra return, é possível quebrar linhas, retornar objetos e etc.
