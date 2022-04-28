import Movie from "./Movie";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
var position = 0;
const Movieslide = ({ Cover, setMode, modalStat, setModalStat }) => {
  const carouselRef = useRef(null);
  const space = Math.round((Cover.length / 4) * -100);

  const Swipe = (direction) => {
    if (direction === "left" && position < 0) {
      position = position + 100;
      carouselRef.current.style.transform = `translateX(${position}%)`;
    } else if (direction === "right" && position - 100 > space) {
      position = position - 100;
      carouselRef.current.style.transform = `translateX(${position}%)`;
    }
  };
  return (
    <div className="carousel">
      <FontAwesomeIcon
        icon={faAngleLeft}
        onClick={() => Swipe("left")}
        size="2x"
        className="left"
      />
      <div className="movies" ref={carouselRef}>
        {Cover.map((movie) => (
          <Movie
            setMode={setMode}
            movie={movie}
            key={movie.id}
            modalStat={modalStat}
            setModalStat={setModalStat}
          />
        ))}
      </div>
      <FontAwesomeIcon
        icon={faAngleRight}
        size="2x"
        className="right"
        onClick={() => Swipe("right")}
      />
    </div>
  );
};

export default Movieslide;
