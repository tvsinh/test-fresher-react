import React from 'react';
import './style.css';
import { useHistory } from 'react-router';
import { BiSearchAlt } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { logout } from 'features/Auth/authSlice';

Header.propTypes = {};

function Header(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    history.push('/login');
  };
  const handleHome = () => {
    history.push('/animal');
  };
  return (
    <div className="header-root">
      <div className="header-item">
        <div className="header-logo">
          <img alt="logo" src="/pet-shop.png" className="header-logo-img" onClick={handleHome} />
        </div>

        <div className="header-search">
          <div className="search-input-wrap">
            <input type="text" className="search-input" placeholder="Enter pet name to search.." />
          </div>
          <div className="search-select">
            <span className="search-select-label">Choose Animals</span>
            <IoIosArrowDown className="search-select-icon" />
            <ul className="search-option">
              <li className="search-option-item">
                <span>All</span>
                <FaCheck className="fa-check search-option-item--active" />
              </li>
              <li className="search-option-item">
                <span>Cat</span>
                <FaCheck className="fa-check" />
              </li>
              <li className="search-option-item">
                <span>Dog</span>
                <FaCheck className="fa-check" />
              </li>
            </ul>
          </div>
          <button className="search-btn">
            <BiSearchAlt className="search-btn-icon " />
          </button>
        </div>
        <div className="header-logged">
          <FaRegUser className="logged-icon" />
          <div className="logged-user">
            <p className="user-account">Account</p>
            <div>
              <p className="user-name">User Name</p>
            </div>
          </div>
          <AiFillCaretDown className="user-icon" />
          <div className="navbar-user-menu">
            <ul className="user-menu">
              <li className="user-item">
                <p>My Account</p>
              </li>
              <li className="user-item user-item-logout" onClick={handleLogOut}>
                <p>Log Out</p>
              </li>
            </ul>
          </div>
        </div>
        <label htmlFor="check-nav-moblie" className="nav-mobile">
          <GiHamburgerMenu className="nav-mobile-icon" />
        </label>
        <input type="checkbox" name="" id="check-nav-moblie" className="input-checkbox" />
        <label htmlFor="check-nav-moblie" className="overlay-moblie"></label>
        <div className="menu-mobile">
          <label htmlFor="check-nav-moblie">
            <IoCloseSharp className="icon-close-mobile" />
          </label>
          <div className="menu-mobile-account"></div>
          <div className="search-moblie">
            <div className="search-input-moblie"></div>
            <div className="button-search-mobile"></div>
          </div>
          <div className="loggout-moblie">
            <div className="loggout-icon-moblie"></div>
            <div className="loggout-title-moblie" onClick={handleLogOut}>
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
