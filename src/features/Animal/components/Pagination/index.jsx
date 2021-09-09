import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

Pagination.propTypes = {
  pagination: PropTypes.object,
};

function Pagination({ pagination }) {
  return (
    <div>
      <p className="pagiantion">Pages {pagination?.current_page}</p>
      <p className="pagiantion">Last Pages {pagination?.total_pages}</p>
    </div>
  );
}

export default Pagination;
