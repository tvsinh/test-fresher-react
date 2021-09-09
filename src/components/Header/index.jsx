import React from 'react';
import './style.css';
import { useHistory } from 'react-router';
import StorageKeys from 'Constants/storage-keys';
import { BiSearchAlt } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';

Header.propTypes = {};

function Header(props) {
  const history = useHistory();

  const handleLogOut = () => {
    history.push('/login');
    localStorage.removeItem(StorageKeys.TOKEN);
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
          <buuton className="search-btn">
            <BiSearchAlt className="search-btn-icon " />
          </buuton>
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
      </div>
    </div>
  );
}

export default Header;
