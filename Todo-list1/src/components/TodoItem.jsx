import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
// import { useContext } from "react";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div>
      <div classNameName="container bg-warning p-2 fs-3">
        <div classNameName="row kg-rows">
          <div classNameName="col-6">{todoName}</div>

          <div classNameName="col-4">{todoDate}</div>

          <div classNameName="col-2">
            <button
              type="button"
              classNameName="btn btn-danger kg-button"
              onClick={() => deleteItem(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
        {/* <hr></hr> */}
      </div>
    </div>
  );
}

export default TodoItem;
