import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useHistory } from 'react-router';
import StorageKeys from 'Constants/storage-keys';
import { useSelector } from 'react-redux';
import InputField from 'components/form-controls/InputField';

Header.propTypes = {};

function Header(props) {
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.current);

  const handleLogOut = () => {
    history.push('/login');
    localStorage.removeItem(StorageKeys.TOKEN);
  };
  return (
    <div className="header-root">
      <div className="header-item">
        <div className="header-right">
          <img alt="logo" src="/pet-shop.png" className="header-logo" />
        </div>
        <div className="header-left">
          <div>
            <input type="text" placeholder="Enter pet name to search.." className="header-input" />
          </div>
          <div>
            {isLogin ? (
              <div className="header-logged">
                <p onClick={handleLogOut} className="header-logged-in">
                  LoggedIn
                </p>
              </div>
            ) : (
              <p onClick={handleLogOut}>NotLoggedIn</p>
            )}
          </div>
        </div>
      </div>
      {/* <button onClick={handleLogOut}>Log Out</button> */}
    </div>
  );
}

export default Header;
