import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';

Pagination.propTypes = {
  pagination: PropTypes.object,
};

function Pagination({ pagination }) {
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
    };
  }, [location.search]);
  const handlePageOne = () => {
    const pagePrev = { page: 1 };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(pagePrev),
    });
    window.scrollTo({ top: 550, behavior: 'smooth' });
  };
  const handlePageTotalPage = () => {
    const pagePrev = { page: pagination.total_pages };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(pagePrev),
    });
    window.scrollTo({ top: 550, behavior: 'smooth' });
  };
  const handlePageNextTwo = () => {
    const pagePrev = { page: queryParams.page + 2 };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(pagePrev),
    });
    window.scrollTo({ top: 550, behavior: 'smooth' });
  };
  const handlePagePrevTwo = () => {
    const pagePrev = { page: queryParams.page - 2 };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(pagePrev),
    });
    window.scrollTo({ top: 550, behavior: 'smooth' });
  };
  const handlePagePrev = () => {
    if (queryParams.page > 1) {
      const pagePrev = { page: queryParams.page - 1 };
      history.push({
        pathname: history.location.pathname,
        search: queryString.stringify(pagePrev),
      });
      window.scrollTo({ top: 550, behavior: 'smooth' });
    }
  };
  const handlePageNext = () => {
    if (queryParams.page < pagination?.total_pages) {
      const pagePrev = { page: queryParams.page + 1 };
      history.push({
        pathname: history.location.pathname,
        search: queryString.stringify(pagePrev),
      });
      window.scrollTo({ top: 550, behavior: 'smooth' });
    }
  };
  return (
    <div className="pagination-root">
      <div className="pagination">
        <ul>
          <li className="button-page" onClick={handlePagePrev}>
            <HiChevronDoubleLeft />
            <span className="button-prev">Prev</span>
          </li>
          {queryParams.page > 1 && (
            <div className="flex-row">
              <li className="numb" onClick={handlePageOne}>
                1
              </li>
              <li className="dots">...</li>
            </div>
          )}

          {queryParams.page !== pagination.total_pages ? (
            <div className="flex-row">
              {queryParams.page + 1 === pagination.total_pages && (
                <div className="flex-row">
                  <li className="numb" onClick={handlePagePrevTwo}>
                    {pagination?.current_page - 2}
                  </li>
                  <li className="numb" onClick={handlePagePrev}>
                    {pagination?.current_page - 1}
                  </li>
                </div>
              )}
              <li className="numb current-page">{pagination?.current_page}</li>
              {queryParams.page + 1 < pagination.total_pages && (
                <div>
                  <li className="numb" onClick={handlePageNext}>
                    {pagination?.current_page + 1}
                  </li>
                </div>
              )}
              {queryParams.page + 2 < pagination.total_pages && (
                <div>
                  <li className="numb" onClick={handlePageNextTwo}>
                    {pagination?.current_page + 2}
                  </li>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-row">
              <li className="numb" onClick={handlePagePrevTwo}>
                {pagination?.current_page - 2}
              </li>
              <li className="numb" onClick={handlePagePrev}>
                {pagination?.current_page - 1}
              </li>
              <li className="numb current-page">{pagination?.current_page}</li>
            </div>
          )}
          {queryParams.page !== pagination.total_pages && (
            <div className="flex-row">
              <li className="dots">...</li>
              <li className="numb" onClick={handlePageTotalPage}>
                {pagination?.total_pages}
              </li>
            </div>
          )}
          <li className="button-page" onClick={handlePageNext}>
            <span className="button-next">Next</span>
            <HiChevronDoubleRight />
          </li>
        </ul>
      </div>
      {/* <script>$(document).ready(function(){});</script> */}
    </div>
  );
}

export default Pagination;
