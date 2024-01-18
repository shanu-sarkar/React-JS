import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "%",
    "X",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  return (
    <div classNameName={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          classNameName={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
