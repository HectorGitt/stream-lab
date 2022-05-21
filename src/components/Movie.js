import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tmdbConfig from "./config/tmdbConfig";
import { category } from "../context/MoviesContext";
import { tmdbApi } from "../context/MoviesContext";
import {faPlayCircle,faShareAlt,faPlus,faCircle,} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Movie = ({ movie, setMode, modalStat, setModalStat, setVideoSrc }) => {
  const fetchVideos = async () => {
    await tmdbApi.getVideos(category.movie, movie.id).then((res) => {
            const videoSrc = 'https://www.youtube.com/embed/'+ res.results[0].key
            setVideoSrc(videoSrc)
            console.log(res.results)
        
    })
    
}
  const toggle = () => {
    if (!modalStat) {
      setMode(movie);
      setModalStat(true);
      fetchVideos();
      
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
        <img className="cover-img" src={tmdbConfig.originalImage(movie.backdrop_path)} alt="" />
      </div>

      <h3 className="name">{movie.title}</h3>
      <div className="details">
        <p className="duration">{movie.release_date}</p>
        <div className="genre">
          <FontAwesomeIcon className="dot" icon={faCircle} />
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
