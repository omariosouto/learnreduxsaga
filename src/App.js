import React from "react";
import { Provider } from "react-redux";
import { TodoListContainer } from "./components/TodoList";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoListContainer />
      </div>
    </Provider>
  );
}

export default App;
