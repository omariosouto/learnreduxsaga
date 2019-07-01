// Sempre o yield antes de qualquer efeito do redux saga
import { call, put } from "redux-saga/effects";
import { SUCCESS_REPOS_LIST, FAILURE_REPOS_LIST } from "./actions";
import { githubReposService } from "../../services/githubReposService";

export function* getRepos() {
  try {
    const response = yield call(githubReposService.getAll);
    // put: dispara uma action para a store efetivamente
    yield put({
      type: SUCCESS_REPOS_LIST,
      payload: { data: response }
    });
  } catch (err) {
    console.log("erro:", err);
    yield put({ type: FAILURE_REPOS_LIST });
  }
}
