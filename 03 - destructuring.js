const user = {
  firstName: "Daniel",
  lastName: "Silva",
  age: 26,
  instagram: "@danielhelb",
  skills: ["Back-end", "Front-end"],
};

const firstName = user.firstName;
const lastName = user.lastName;
const { firstName, lastName, age: idade } = user; // é a mesma coisa do exemplo acima
//o age: idade, serve para renomear uma variável na destruturação
const [primary, secondary] = user.skills;

console.log(idade);
