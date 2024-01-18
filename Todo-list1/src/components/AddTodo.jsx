import { useContext } from "react";
import { useRef } from "react";
import { MdAddCircle } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoNames = todoNameElement.current.value;
    const deuDates = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = " ";
    addNewItem(todoNames, deuDates);
  };

  return (
    <div>
      <div classNameName="container text-center bg-danger p-3">
        <div classNameName="row kg-rows">
          <div classNameName="col-6">
            <input
              classNameName="bg-info"
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo hare"
            />
          </div>

          <div classNameName="col-4">
            <input classNameName="bg-info" type="date" ref={todoDateElement} />
          </div>

          <div classNameName="col-2">
            <button
              type="button"
              classNameName="btn btn-success kg-button"
              onClick={handleAddButtonClicked}
            >
              <MdAddCircle />
            </button>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
}

export default AddTodo;
