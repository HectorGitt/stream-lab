import { useState } from "react";
//import styles
import "./styles/app.scss";

//import data
import data from "../src/data";

//import components
import Movieslide from "./components/Movieslide";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import Banner from "./components/Banner";

function App() {
  //create states
  const [Cover] = useState(data());
  const [Mode, setMode] = useState(Cover[0]);
  const [modalStat, setModalStat] = useState(false);

  return (
    <div className="App">
      <Nav />
      <Movieslide
        modalStat={modalStat}
        setModalStat={setModalStat}
        setMode={setMode}
        Cover={Cover}
      />
      <Modal
        Mode={Mode}
        modalStat={modalStat}
        setModalStat={setModalStat}
        setMode={setMode}
      />
      <Banner />
    </div>
  );
}

export default App;
