export const Types = {
  FETCH: "githubRepos/FETCH",
  FETCH_SUCCESS: "githubRepos/FETCH_SUCCESS",
  FETCH_FAILURE: "githubRepos/FETCH_FAILURE"
};

export const Creators = {
  fetchReposList: () => ({ type: Types.FETCH })
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export function githubReposReducer(state = INITIAL_STATE, action) {
  if (action.type === Types.FETCH) {
    return { ...state, loading: true };
  }

  if (action.type === Types.FETCH_SUCCESS) {
    return {
      ...state,
      data: action.payload.data,
      loading: false,
      error: false
    };
  }

  if (action.type === Types.FETCH_FAILURE) {
    return { ...state, data: [], error: true };
  }

  return state;
}
