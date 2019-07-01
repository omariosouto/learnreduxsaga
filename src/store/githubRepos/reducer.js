import {
  REQUEST_REPOS_LIST,
  SUCCESS_REPOS_LIST,
  FAILURE_REPOS_LIST
} from "./actions";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export function githubReposReducer(state = INITIAL_STATE, action) {
  if (action.type === REQUEST_REPOS_LIST) {
    return { ...state, loading: true };
  }

  if (action.type === SUCCESS_REPOS_LIST) {
    return {
      ...state,
      data: action.payload.data,
      loading: false,
      error: false
    };
  }

  if (action.type === FAILURE_REPOS_LIST) {
    return { ...state, data: [], error: true };
  }

  return state;
}
