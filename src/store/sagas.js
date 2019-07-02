import { takeLatest, all } from "redux-saga/effects";
import { Types } from "./ducks/githubRepos";
import { getRepos } from "./ducks/githubRepos/saga";

export function* rootSaga() {
  // all: roda um array de sagas estudando elas conforme o take passado e fica monitorando isso
  yield all([takeLatest(Types.FETCH, getRepos)]);

  // takeEvery: capture todas as vezes que dispararem ACTION, e chame a função saga
  // takeLatest: capture a ÚLTIMA vez que dispararem um ACTION, e chame a função saga seguindo o fluxo
  // yield takeLatest("ASYNC_ADD_TODO", asyncAddTodo);
}
