import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { Link } from '@mui/material';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className='header'>
      <Link to="/">
      {/* logo */}
      <img
        className='header__logo'
        src='https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png'
        alt=''
      ></img>
      </Link>

      {/* search bar */}
      <div className='header__search'>
        <input className='header__searchInput' type='text'></input>
        <SearchIcon className='header__searchIcon' />
      </div>

      {/* sign in/ returns and orders / cart */}
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

        <Link to="/checkout">
        <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
