import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/SearchRounded';
import ArrowDropDownCircleRounded from '@material-ui/icons/ArrowDropDownCircleRounded';
import Post from '@material-ui/icons/PagesRounded';
import defavatar from './img/defavatar.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      {/* <img 
        className='navbar__logo'
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt='Logo'
      /> */}
      <span className="navbar__name"><Link to="/">spottid</Link></span>

      <div className="navbar__search">
        <input className="navbar__searchInput" type="text" placeholder="search spottid..." />
        <SearchIcon className="navbar__searchIcon" />
      </div>

      <div className="navbar__menu">
        <div className="navbar__option">
          <Link to="/post"><Post /></Link>
        </div>

        <Link to="/login">
        <div className="navbar__user">
          <img className="navbar__avatar" src={defavatar} alt="Avatar" />
          <div className="navbar__loggedIn">
            <span className="navbar__usernameLineOne">logged in as</span> 
            <span className="navbar__usernameLineTwo">karena117</span>
          </div>
        </div>
        </Link>
        
        <div className="navbar__optionDropdown">
          <ArrowDropDownCircleRounded fontSize="large" />
        </div>

      </div>

    </div>
  )
}

export default Navbar;
