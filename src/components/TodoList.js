import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ReposActions from "../store/githubRepos/actions";

export const TodoList = ({ repos, requestReposList }) => {
  return (
    <React.Fragment>
      <button onClick={() => requestReposList()}>Load repos</button>
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
  const actionCreators = bindActionCreators(ReposActions, dispatch);
  return actionCreators;
};

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
