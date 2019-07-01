import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { todos } from "./reducers/todos";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    todos
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
