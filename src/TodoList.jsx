import { useState } from "react";

// TodoList is responsible for displaying todos
// and handling edit/delete UI interactions
const TodoList = ({ todos, onDeleteTodo, onUpdateTodo }) => {
  // Stores the id of the todo currently being edited
  const [editingTodoId, setEditingTodoId] = useState(null);

  // Stores the temporary text while editing
  const [editingText, setEditingText] = useState("");

  // Start editing a specific todo
  const handleStartEdit = (todo) => {
    setEditingTodoId(todo.id);
    setEditingText(todo.text);
  };

  // Submit updated todo text
  const handleSubmitUpdate = (todoId) => {
    if (!editingText.trim()) return;

    // Ask parent to update the todo
    onUpdateTodo(todoId, editingText);

    // Reset edit state
    setEditingTodoId(null);
    setEditingText("");
  };

  // Cancel editing mode
  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditingText("");
  };

  return (
    <>
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          {/* NORMAL VIEW MODE */}
          {editingTodoId !== todo.id ? (
            <>
              <p className="todo-text">{todo.text}</p>

              <div className="btn-group">
                <button
                  className="btn edit-btn"
                  onClick={() => handleStartEdit(todo)}
                >
                  Edit
                </button>

                <button
                  className="btn delete-btn"
                  onClick={() => onDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            /* EDIT MODE */
            <>
              <input
                className="editInp"
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />

              <div className="btn-group">
                <button
                  className="btn update-btn"
                  onClick={() => handleSubmitUpdate(todo.id)}
                >
                  Submit
                </button>

                <button className="btn" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default TodoList;
