import { useState, useEffect } from "react";
//import data
//import components
import Movieslide from "../components/Movieslide";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import Banner from "../components/Banner";
import { useTmdbApi } from "../context/MoviesContext";
import MovieGrid from "../components/MovieGrid";

const Moviepage = () => {
    //create states
    const [Mode, setMode] = useState('');
    const [modalStat, setModalStat] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const {movies, top_rated} = useTmdbApi();
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
                setVideoSrc={setVideoSrc}
            />}
            <Modal
                videoSrc={videoSrc}
                setVideoSrc={setVideoSrc}
                Mode={Mode}
                modalStat={modalStat}
                setModalStat={setModalStat}
                setMode={setMode}
            />
            <Banner imgId={top_rated} />
            {movies && <MovieGrid
                heading={'TOP RATED'}
                modalStat={modalStat}
                setModalStat={setModalStat}
                setMode={setMode}
                Cover={top_rated}
                setVideoSrc={setVideoSrc}
            />}
        </div>
    )
}

export default Moviepage;