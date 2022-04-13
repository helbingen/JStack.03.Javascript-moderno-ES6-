const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Sucesso");
    reject("Erro");
  }, 2000);
});

// apiCall
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });
//todo código abaixo da promisse vai ser executado antes da promisse resolver

async function run() {
  try {
    const resposta = await apiCall;
    //o await trava a execução do código nessa linha até a promisse resolver
    console.log(resposta);
  } catch (erro) {
    console.log(erro);
  }
}
run();
