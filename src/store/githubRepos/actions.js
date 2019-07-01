export const REQUEST_REPOS_LIST = "REQUEST_REPOS_LIST";
export const SUCCESS_REPOS_LIST = "SUCCESS_REPOS_LIST";
export const FAILURE_REPOS_LIST = "FAILURE_REPOS_LIST";

export function requestReposList() {
  return {
    type: REQUEST_REPOS_LIST
  };
}
