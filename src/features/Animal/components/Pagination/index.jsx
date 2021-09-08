import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  pagination: PropTypes.object,
};

function Pagination({ pagination }) {
  return (
    <div>
      <p>Pages {pagination?.current_page}</p>
      <p>Last Pages {pagination?.total_pages}</p>
    </div>
  );
}

export default Pagination;
