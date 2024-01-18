import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "%") {
      setCalVal((prevExpression) => parseFloat(prevExpression) / 100);
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "X") {
      setCalVal((prevExpression) => prevExpression.slice(0, -1));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div classNameName={styles.claculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;

//  if (buttonText.key === "Enter") {
//       let value = [...calVal.key];
//       setCalVal(value);
