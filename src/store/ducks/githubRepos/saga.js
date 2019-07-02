// Sempre o yield antes de qualquer efeito do redux saga
import { call, put, delay } from "redux-saga/effects";
import { Types } from "./index";
import { githubReposService } from "../../../services/githubReposService";

export function* getRepos() {
  yield delay(1000);

  try {
    const response = yield call(githubReposService.getAll);
    // put: dispara uma action para a store efetivamente
    yield put({
      type: Types.FETCH_SUCCESS,
      payload: { data: response }
    });
  } catch (err) {
    yield put({ type: Types.FETCH_FAILURE });
  }
}

// export function getRepos() {
//   return dispatch => {
//     setTimeout(async () => {
//       try {
//         const response = await githubReposService.getAll();
//         // put: dispara uma action para a store efetivamente
//         return dispatch({
//           type: Types.REQUEST_SUCCESS,
//           payload: { data: response }
//         });
//       } catch (err) {
//         return dispatch({ type: Types.REQUEST_FAILURE });
//       }
//     });
//   };
// }
