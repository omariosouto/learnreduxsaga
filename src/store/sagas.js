import { delay, takeEvery, put } from "redux-saga/effects";

function* asyncAddTodo(action) {
  yield delay(2000);

  yield put({ type: "ADD_TODO", payload: { text: action.payload.text } });
}

export function* rootSaga() {
  // yield all([takeEvery("ASYNC_ADD_TODO", asyncAddTodo)]);

  // takeEvery: capture todas as vezes que dispararem ACTION, e chame a função saga
  yield takeEvery("ASYNC_ADD_TODO", asyncAddTodo);
}
