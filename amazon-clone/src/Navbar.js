import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        
        <div className="header__optionBasket">
                      <ShoppingCartIcon />
                      <span className="header__basketCount">0</span>
                  </div>

              </div>
          
      </div>
  )
}

export default Navbar;
