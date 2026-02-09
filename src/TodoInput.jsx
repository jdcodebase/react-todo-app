import { useState } from "react";

// TodoInput is responsible ONLY for collecting user input
// It does not store todos — it just sends data to the parent
const TodoInput = ({ onAddTodo }) => {
  // State to track the current value of the input field
  const [inputValue, setInputValue] = useState("");

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Ignore empty or whitespace-only input
    if (!inputValue.trim()) return;

    // Create a new todo object
    const newTodo = {
      id: Date.now(), // simple unique id
      text: inputValue,
    };

    // Send the todo data to parent component
    onAddTodo(newTodo);

    // Clear input field after submission
    setInputValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleFormSubmit}>
      {/* Controlled input field */}
      <input
        className="todo-input"
        type="text"
        placeholder="Enter a todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
