import { useSelector } from "react-redux";

const DisplayCounter = () => {

   const counter = useSelector(storo => storo.counter);

    return (
      <p className="lead mb-4">
            Counter Current Value: {counter}
      </p>
    );
}

export default DisplayCounter;