import Movie from "./Movie";
import { useRef, useEffect } from "react";
import { useTmdbApi } from "../context/MoviesContext";


const MovieGrid = ({ Cover, setMode, modalStat, setModalStat, setVideoSrc, heading }) => {
  const carouselRef = useRef(null);
  const {fetchMore, top_rated} = useTmdbApi();
  useEffect(()=> {

  }, [top_rated])
  return (
    <div className="grid">
        <h2 className="heading">{heading}</h2>
      <div className="movies" ref={carouselRef}>
        {Cover.map((movie) => (
          <Movie
            setMode={setMode}
            movie={movie}
            key={movie.id}
            modalStat={modalStat}
            setModalStat={setModalStat}
            setVideoSrc={setVideoSrc}
          />
        ))}
      </div>
      <div className="button-cont">
        <button onClick={fetchMore} className="button" >Load more</button>
      </div>
      
    </div>
  );
};

export default MovieGrid;
