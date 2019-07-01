export function requestTodoList() {
  return {
    type: "REQUEST_TODO_LIST"
  };
}

export function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: {
      text
    }
  };
}
