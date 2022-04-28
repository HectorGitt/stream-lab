import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faShareAlt,
  faPlus,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Movie = ({ movie, setMode, modalStat, setModalStat }) => {
  const toggle = () => {
    if (!modalStat) {
      setMode(movie);
      setModalStat(true);
    }
  };
  return (
    <div className="movie">
      <div className="cover">
        <FontAwesomeIcon
          onClick={toggle}
          className="cover-play"
          size="2x"
          icon={faPlayCircle}
        />
        <div className="action">
          <FontAwesomeIcon className="like" icon={faHeart} />
          <FontAwesomeIcon icon={faShareAlt} />
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <img className="cover-img" src={movie.cover} alt="" />
      </div>

      <h3 className="name">{movie.name}</h3>
      <div className="details">
        <p className="duration">{movie.duration}</p>
        <div className="genre">
          <FontAwesomeIcon className="dot" icon={faCircle} />
          <p>{movie.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
