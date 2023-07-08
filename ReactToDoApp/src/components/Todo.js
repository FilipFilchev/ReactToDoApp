import React from "react";

function Todo({ todo, removeTodo }) {
  return (
    <li>
      {todo.text} <button onClick={() => removeTodo(todo.id)}>x</button>
    </li>
  );
}

export default Todo;
