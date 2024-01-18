import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDeuDate },
    ];
    return newTodoItems;
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({shanu}) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDeuDate) => {
    // We using useredsuer:-
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDeuDate,
      },
    };

    dispatchTodoItems(newItemAction);
};

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };

    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {shanu}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
