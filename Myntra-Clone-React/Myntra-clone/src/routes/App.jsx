import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FatchItems from "../components/FatchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  
    const fetchStetus = useSelector((store) => store.fetchStetus);

  return (
    <>
      <Header />
      <FatchItems />
      {fetchStetus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
