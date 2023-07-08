// App.js
import React, { useState, useEffect } from "react";

import TodoList from "./components/TodoList";
import NewTodoForm from "./components/ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: Date.now() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={`app-container`}>
      {/* <button className={'togg'} onClick={toggleTheme}>Toggle Theme</button> */}


      <input type="checkbox" id="darkmode-toggle"   onClick={toggleTheme}/>
      <label  for="darkmode-toggle"></label>



      <h1>Filip's ToDo App</h1>
      <h2>Enjoy</h2>
      <NewTodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
