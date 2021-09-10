import Header from 'components/Header';
import React from 'react';
import './style.css';

DetailPage.propTypes = {};

function DetailPage(props) {
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
