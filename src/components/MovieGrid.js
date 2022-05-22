import Movie from "./Movie";
import { useRef } from "react";


const MovieGrid = ({ Cover, setMode, modalStat, setModalStat, setVideoSrc, heading }) => {

  const carouselRef = useRef(null);
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
    </div>
  );
};

export default MovieGrid;
