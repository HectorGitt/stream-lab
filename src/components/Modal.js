import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faAngleRight,faAngleLeft,faTimes,} from "@fortawesome/free-solid-svg-icons";
const Modal = ({ Mode, setModalStat, modalStat, setMode, videoSrc, setVideoSrc }) => {
  if (Mode) {
    const toggle = () => {
      if (modalStat) {
        setModalStat(false);
        setVideoSrc("")
      }
    };
    return (
      <div className={`modal ${modalStat ? "activeModal" : ""}`}>
        <div className="modalCase">
          <FontAwesomeIcon className="times" onClick={toggle} icon={faTimes} />
          <div className="modalCover">
            {/* <img src={tmdbConfig.originalImage(Mode.backdrop_path)} alt="" /> */}
            <iframe className="iframe" title="Movie Trailer" src={videoSrc}></iframe>
          </div>
          <div className="modalControl">
            <FontAwesomeIcon size="2x" icon={faAngleLeft} />
            <FontAwesomeIcon size="2x" icon={faPlay} />
            <FontAwesomeIcon size="2x" icon={faAngleRight} />
          </div>
          <h3 className="modalName">{Mode.name}</h3>
          <div className="modalDetails">
            <p className="modalDuration">{Mode.release_date}</p>
            <p className="modalGenre">Vote: {Mode.vote_average} / 10</p>

            
          </div>
          <p className="movieOverview">{Mode.overview}</p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Modal;
