import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

// TodoApp is the main logic holder of the application
// All state and core operations live here
const TodoApp = () => {
  // TODOS STATE
  // We are using lazy initialization so localStorage runs only once
  const [todoList, setTodoList] = useState(() => {
    const storedTodos = localStorage.getItem("todos");

    // If data exists in localStorage → use it
    // Otherwise → start with an empty array
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // SIDE EFFECT: Sync React state with localStorage
  // Whenever todoList changes, update localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  // ADD TODO
  // Receives a complete todo object from TodoInput
  const handleAddTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  // DELETE TODO
  // Remove todo based on its unique id
  const handleDeleteTodo = (todoId) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== todoId),
    );
  };

  // UPDATE TODO
  // Find the matching todo and update only its text
  const handleUpdateTodo = (todoId, updatedText) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === todoId ? { ...todo, text: updatedText } : todo,
      ),
    );
  };

  return (
    <div className="container">
      {/* Input component only sends data upward */}
      <TodoInput onAddTodo={handleAddTodo} />

      {/* List component only displays data and triggers actions */}
      <TodoList
        todos={todoList}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default TodoApp;
