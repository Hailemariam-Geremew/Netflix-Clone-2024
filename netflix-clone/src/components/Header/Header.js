import React from 'react'
import "../Header/header.css"
const Header = () => {
  return (
    <div>
      <div className=" header-outer-container ">
        <div className="header-conatiner">
          <div className="header-left">

            <ul>
              <li>Netflix</li>
              <li>Home</li>
              <li>Tvshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header