import { takeLatest, all } from "redux-saga/effects";
import { REQUEST_REPOS_LIST } from "./githubRepos/actions";
import { getRepos } from "./githubRepos/saga";

export function* rootSaga() {
  // all: roda um array de sagas estudando elas conforme o take passado e fica monitorando isso
  yield all([takeLatest(REQUEST_REPOS_LIST, getRepos)]);

  // takeEvery: capture todas as vezes que dispararem ACTION, e chame a função saga
  // takeLatest: capture a ÚLTIMA vez que dispararem um ACTION, e chame a função saga seguindo o fluxo
  // yield takeLatest("ASYNC_ADD_TODO", asyncAddTodo);
}
