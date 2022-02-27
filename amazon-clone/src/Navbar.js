import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/SearchTwoTone';
import ArrowDropDownCircleRounded from '@material-ui/icons/ArrowDropDownCircleRounded';
import defavatar from './img/defavatar.jpg';

function Navbar() {
  return (
    <div className="navbar">
      {/* <img 
        className='navbar__logo'
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt='Logo'
      /> */}
      <span className="navbar__name">spottid</span>

      <div className="navbar__search">
        <input className="navbar__searchInput" type="text" placeholder="search spottid..." />
        <SearchIcon className="navbar__searchIcon" />
      </div>

      <div className="navbar__menu">
        <div className="navbar__user">
          <img className="navbar__avatar" src={defavatar} alt="Avatar" />
          <div className="navbar__loggedIn">
            <span className="navbar__usernameLineOne">logged in as</span> 
            <span className="navbar__usernameLineTwo">username</span>
          </div>
        </div>
        
        <div className="navbar__optionDropdown">
          <ArrowDropDownCircleRounded fontSize="large" />
        </div>

      </div>

    </div>
  )
}

export default Navbar;
