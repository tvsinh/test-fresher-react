import Header from 'components/Header';
import StorageKeys from 'Constants/storage-keys';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './style.css';

DetailPage.propTypes = {};

function DetailPage(props) {
  const history = useHistory();

  const isLogin = useSelector((state) => state.auth.current);
  const logedIn = !!isLogin;
  useEffect(() => {
    if (!logedIn) {
      history.push('/login');
      localStorage.removeItem(StorageKeys.TOKEN);
    }
  }, [history, logedIn]);
  return (
    <>
      <Header />
      <div className="detail-root">
        <p className="title-detail">Detail animal page</p>
      </div>
    </>
  );
}

export default DetailPage;
