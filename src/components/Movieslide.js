import Movie from "./Movie";
import { useRef} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Movieslide = ({ Cover, setMode, modalStat, setModalStat, setVideoSrc }) => {
  var position = 0;
  const carouselRef = useRef(null);
  // const [space, setSpace] = useState(0)
  const space = Math.round((Cover.length / (window.innerWidth / 300)) * -100 -50);

  const Swipe = (direction) => {
    if (direction === "left" && position < 0) {
      position = position + 100;
      carouselRef.current.style.transform = `translateX(${position}%)`;
    } else if (direction === "right" && position - 100 > space) {
      position = position - 100;
      carouselRef.current.style.transform = `translateX(${position}%)`;
    }
  }; 
  /* useEffect(() => {
    setSpace((init) => Math.round((carouselRef.current.offsetWidth )));
    console.log(carouselRef)

  }, [space])
  

  const Swipe = (direction) => {
    if (direction === "left" && position < 0) {
      position = position + window.innerWidth;
      carouselRef.current.style.transform = `translateX(${position}px)`;
      console.log(position)
    } else if (direction === "right" && position - 100 < space) {
      console.log(position)
      position = position - window.innerWidth;
      carouselRef.current.style.transform = `translateX(${position}px)`;
    }
  }; */
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
            setVideoSrc={setVideoSrc}
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
