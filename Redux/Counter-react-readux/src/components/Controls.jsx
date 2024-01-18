import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleToggle = () => {
    dispatch({ type: "PRIVACT_TOGGLE" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = ""
  };


    const handeSurect = () => {
      dispatch({
        type: "SUBRECT",
        payload: {
          num: inputElement.current.value,
        },
      });
      inputElement.current.value = "";
    };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button type="button" 
        className="btn btn-warning" 
        onClick={handleToggle}
        >
          Toggle
        </button>
      </div>
      {/* Second button div */}
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button type="button" className="btn btn-danger" onClick={handeSurect}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
