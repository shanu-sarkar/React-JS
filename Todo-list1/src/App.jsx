import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContext.Provider value={[]}>
      <center classNameName="todo-container mt-2">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
