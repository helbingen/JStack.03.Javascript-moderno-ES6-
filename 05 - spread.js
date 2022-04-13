const user = {
  firstName: "Daniel",
  lastName: "Silva",
  age: 26,
  instagram: "@danielhelb",
  skills: ["Back-end", "Front-end", "UI/UX"],
  active: false,
};

// spread (espalhar) operator
const updatedUser = {
  ...user, //serve para clonar o objeto user
  active: true, //altera a propriede do objeto, caso o nome da propriedade seja igual ao do objeto user
};

const updatedUser2 = {
  ...user,
  skills: [...user.skills, "Marketing"], //adiciona um valor no array
  active: true,
};
console.log({ user });
console.log({ updatedUser });
console.log({ updatedUser2 });
