import { useState, useRef } from "react";
import { MdAddCircle } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState('');
  // const [deuDate, SetDeuDate] = useState('');

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (e) => {
  //   setTodoName(e.target.value);
  // }

  // const handleDateChange = (e) => {
  //   SetDeuDate(e.target.value);

  // }

  const handleAddButtonClicked = () => {
    // onNewItem(todoName, deuDate);
    // SetDeuDate('');
    // setTodoName('')
    const todoNames = todoNameElement.current.value;
    const deuDates = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = " ";
    onNewItem(todoNames, deuDates);
  };

  return (
    <div>
      <div classNameName="container text-center bg-danger p-3">
        <div classNameName="row kg-rows">
          <div classNameName="col-6">
            <input
              classNameName="bg-info"
              type="text"
              // value={todoName}
              ref={todoNameElement}
              placeholder="Enter Todo hare"
              // onChange={handleNameChange}
            />
          </div>

          <div classNameName="col-4">
            <input
              classNameName="bg-info"
              type="date"
              ref={todoDateElement}
              // value={deuDate}
              // onChange={handleDateChange}
            />
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
