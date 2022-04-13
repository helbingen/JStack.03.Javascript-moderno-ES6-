import userName, { sayHello as novoNome } from "./sayHello.js";
//é a mesma coisa que utilizar: const var = require('./var'), só que precisa especificar o tipo do arquivo e também criar o arquivo package.json informando que vai usar o ES Modules.
//ES Modules ficou disponível após o EcmaScript 6

novoNome(userName);
