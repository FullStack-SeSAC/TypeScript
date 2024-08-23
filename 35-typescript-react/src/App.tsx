import React from "react";
import TodoList from "./components/TodoList";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <hr />

      <PostList />
    </div>
  );
}

export default App;
