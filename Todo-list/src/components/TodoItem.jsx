import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
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
              onClick={() => onDeleteClick(todoName)}
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
