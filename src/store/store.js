import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { githubReposReducer } from "./githubRepos/reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    repos: githubReposReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
