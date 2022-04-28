import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ Mode, setModalStat, modalStat, setMode }) => {
  if (Mode) {
    const toggle = () => {
      if (modalStat) {
        setModalStat(false);
      }
    };
    return (
      <div className={`modal ${modalStat ? "activeModal" : ""}`}>
        <div className="modalCase">
          <FontAwesomeIcon className="times" onClick={toggle} icon={faTimes} />
          <div className="modalCover">
            <img src={Mode.cover} alt="" />
          </div>
          <div className="modalControl">
            <FontAwesomeIcon size="2x" icon={faAngleLeft} />
            <FontAwesomeIcon size="2x" icon={faPlay} />
            <FontAwesomeIcon size="2x" icon={faAngleRight} />
          </div>
          <h3 className="modalName">{Mode.name}</h3>
          <div className="modalDetails">
            <p className="modalDuration">{Mode.duration}</p>
            <p className="modalGenre">{Mode.genre}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Modal;
