import React from 'react'
import Nav from '../components/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
        <Nav/>
        <div className="home__hero">
            <div className='home__hero__content'>
                <div className="home__hero-text">
                See The World in Third Person
                </div>
                <div className='home__lead'>
                    <Link to="/movies" className='link'>
                        <FontAwesomeIcon className="play" icon={faPlay} />
                    </Link>
                    Stream Our Lab 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage;