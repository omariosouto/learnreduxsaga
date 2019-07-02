import { combineReducers } from "redux";
import { githubReposReducer } from "./githubRepos";

export const reducers = combineReducers({
  repos: githubReposReducer
});
