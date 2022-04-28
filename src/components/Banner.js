import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import pic from "../cover/banner.jpg";
const Banner = () => {
  return (
    <div className="bannerCont">
      <div className="banner">
        <div className="iconCont">
          <FontAwesomeIcon size="2x" className="bannerIcon" icon={faAngleUp} />
        </div>
        <h1>COMMAND IN YOUR HAND</h1>
        <img src={pic} alt={pic} />
      </div>
    </div>
  );
};
export default Banner;
