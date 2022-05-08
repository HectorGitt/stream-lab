import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faAngleDown,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const {currentUser} = useAuth();
  return (
    <header className="navContainer">
      <div className="logoCont">
        <Link to="/" className="logo link">
          <FontAwesomeIcon size="2x" className="play" icon={faPlayCircle} />
          <span>STREAMLAB</span>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li className="active navLink">
            Home <FontAwesomeIcon className="arrowDown" icon={faAngleDown} />
          </li>
          <li className="navLink ">
            <Link to="/movies" className="link">Movies <FontAwesomeIcon className="arrowDown" icon={faAngleDown} /></Link>
          </li>
          <li className="navLink">
            Tv Shows{" "}
            <FontAwesomeIcon className="arrowDown" icon={faAngleDown} />
          </li>
          <li className="navLink">
            Video <FontAwesomeIcon className="arrowDown" icon={faAngleDown} />
          </li>
          <li className="navLink">
            Pages <FontAwesomeIcon className="arrowDown" icon={faAngleDown} />
          </li>
          <li className="search">
            <FontAwesomeIcon icon={faSearch} />
          </li>
          {currentUser?.email && currentUser?.email}
          <li className="profile">
          
            <Link to="/login" className="link">
              
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li className="sub">
            <button>SUBSCRIBE</button>
          </li>
        </ul>

        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
