// Importing the main Todo application component
import TodoApp from "./TodoApp";

// Importing global styles for the App component
import "./App.css";

// Root App component
// This component works as a wrapper/layout for the entire application
const App = () => {
  return (
    // Main container of the app
    <div className="app">
      {/* App heading */}
      <h1 className="title">Todos</h1>

      {/* TodoApp contains all the todo logic and UI */}
      <TodoApp />
    </div>
  );
};

export default App;
