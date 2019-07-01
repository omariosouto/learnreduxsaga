import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { todos } from "./reducers/todos";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    todos
  }),
  applyMiddleware(sagaMiddleware)
);
