import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import tmdbConfig from "./config/tmdbConfig";

import pic from "../cover/banner.jpg";
const Banner = ({imgId}) => {
  return (
    <div className="bannerCont">
      <div className="banner">
        <div className="iconCont">
          <FontAwesomeIcon size="2x" className="bannerIcon" icon={faAngleUp} />
        </div>
        <h1>{imgId[0].title}</h1>
        <img src={tmdbConfig.originalImage(imgId[0].backdrop_path)} alt={pic} />
      </div>
    </div>
  );
};
export default Banner;
