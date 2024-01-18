
import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
function App() {

  return (
    <center className="mt-3">

        <ClockHeading/>
          <ClockSlogan/>
          <CurrentTime/>

  </center>
  );
}

export default App;
