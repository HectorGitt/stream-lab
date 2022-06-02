import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faAngleDown,
  faUser,
  faSearch,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((init) => !init)
  }

  return (
    <header className="navContainer">
      <div className="logoCont">
        <Link to="/" className="logo link">
          <FontAwesomeIcon size="2x" className="play" icon={faPlayCircle} />
          <span>STREAMLAB</span>
        </Link>
      </div>
      <nav className="nav">
        <ul className="menubar">
          <li className="navLink "><FontAwesomeIcon onClick={handleMenu} size="2x"icon={(!menu)? faBars : faTimes} /></li>
        </ul>
        
        <ul className={`nav__main ${menu? 'display':''}`}>
          <li className="active navLink">
            Home<FontAwesomeIcon className="arrowDown" icon={faAngleDown} />
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
          <li className="profile">
          
            <Link to="/login" className="link">
              
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li className="sub">
            <button>SUBSCRIBE</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
