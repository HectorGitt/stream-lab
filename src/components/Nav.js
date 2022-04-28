import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faAngleDown,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <header className="navContainer">
      <div className="logo">
        <FontAwesomeIcon size="2x" className="play" icon={faPlayCircle} />
        <span>STREAMLAB</span>
      </div>
      <nav className="nav">
        <ul>
          <li className="active navLink">
            Home <FontAwesomeIcon className="arrowDown" icon={faAngleDown} />
          </li>
          <li className="navLink">
            Movies <FontAwesomeIcon className="arrowDown" icon={faAngleDown} />
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
          <li className="profile">
            <FontAwesomeIcon icon={faUser} />
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
