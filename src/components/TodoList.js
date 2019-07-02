import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as GithubReposCreators } from "../store/ducks/githubRepos/index";

export const TodoList = ({ repos, fetchReposList }) => {
  return (
    <React.Fragment>
      <button onClick={() => fetchReposList()}>Load repos</button>
      <div>{repos.loading && "Carregando..."}</div>
      <ul>
        {repos.data.map(todo => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = dispatch => {
  const actionCreators = bindActionCreators(GithubReposCreators, dispatch);
  return actionCreators;
};

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
