import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TodoActions from "../store/actions";

export const TodoList = ({ todos, addTodo }) => {
  return (
    <React.Fragment>
      <button onClick={() => addTodo("alo alo w brazil")}>Add todo</button>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  todos: state.todos.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
