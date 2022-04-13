const user = {
  firstName: "Daniel",
  lastName: "Silva",
  age: 26,
  instagram: "@danielhelb",
  skills: ["Back-end", "Front-end", "UI/UX"],
};
//rest (resto) operator
const { firstName, skills, ...resto } = user; //resto é uma variável que armazena o objeto sem as duas outras propríedades
const [primary, ...restoSkills] = skills;
console.log(restoSkills);
