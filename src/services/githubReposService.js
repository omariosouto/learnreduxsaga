function getAll(action) {
  console.log(action);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(new Error("Error :("));
      resolve([{ id: 1, name: "redux-js" }, { id: 2, name: "Teste" }]);
    }, 100);
  });
}

export const githubReposService = { getAll };
