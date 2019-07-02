# Pesquisa sobre o Redux Saga

- redux
  - TUDO deve ser imutável
  - dados que são gerados a partir de dados do redux devem ser gerados dentro do componente
    - monta como prop no container component e passa pro presentational
  - Selectors
    - https://www.youtube.com/watch?v=3GpRg-PdbEU

* Midleware

  - Entre as actions e os reducers
  - alterar o conteúdo entre a action e o reducer
  - pode ser assíncrona
    - request a API é o mais comum
  - ex: Pega repos do github
    - **action** (recebe o nome do repo)
    - middleware request pra api (ponte actions e reducers)
    - resultado vai pro **reducer** (recebe todos os dados do repositório)
  - thunk
    - somente para mandar o request assincrono
    - https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
  - saga
    - "easier to handle and more efficient to execute."
    - select effect fornece os dados da store atual
    - fácil de testar
    - gerencia requests assincronas como debounce
    - throttle
    - 2 requests sejam feitas ao mesmo tempo
      - garantir que as duas tão prontas para poder seguir

* Generators: funções, percorremos parte delas sem executar a função por inteiro

```js
function* generator() {
  yield; // para por aqui até terminar
  yield; // terminou o outro veem pra ca
}
```

## Fluxo de criar um request de algo

- 3 ações
  - principal (request)
    - success
    - error

========================================

## Links

- https://github.com/redux-saga/redux-saga

## Organização:

## Redux

- https://redux.js.org/faq/code-structure

### Redux Saga

- https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
- https://hackernoon.com/my-journey-toward-a-maintainable-project-structure-for-react-redux-b05dfd999b5
- Tutorials: https://www.youtube.com/watch?v=0L99n06F2rU&list=PLMV09mSPNaQlWvqEwF6TfHM-CVM6lXv39

### Redux Ducks

- https://blog.rocketseat.com.br/estrutura-redux-escalavel-com-ducks/
  - https://www.youtube.com/watch?v=q-If9n-tUyA
