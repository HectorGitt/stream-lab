import { useState, useEffect } from "react";
//import data
import data from "../../src/data";
//import components
import Movieslide from "../components/Movieslide";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import Banner from "../components/Banner";
import { useTmdbApi } from "../context/MoviesContext";

const Moviepage = () => {
    //create states
    const [Cover] = useState(data());
    const [Mode, setMode] = useState(Cover[0]);
    const [modalStat, setModalStat] = useState(false);
    const {movies} = useTmdbApi();
    useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <div>
            <Nav />
            {movies && <Movieslide
                modalStat={modalStat}
                setModalStat={setModalStat}
                setMode={setMode}
                Cover={movies}
            />}
            <Modal
                Mode={Mode}
                modalStat={modalStat}
                setModalStat={setModalStat}
                setMode={setMode}
            />
            <Banner />
        </div>
    )
}

export default Moviepage;