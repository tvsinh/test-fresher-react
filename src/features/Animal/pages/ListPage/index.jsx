import animalApi from 'api/animalApi';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ScrollTop from 'components/ScrollTop';
import StorageKeys from 'Constants/storage-keys';
import AnimalSkeletonList from 'features/Animal/components/AnimalSkeletonList';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import AnimalList from '../../components/AnimalList';
import Pagination from '../../components/Pagination';
import queryString from 'query-string';

import './style.css';
import Loading from 'components/Loading';

ListPage.propTypes = {};

function ListPage() {
  const history = useHistory();
  const location = useLocation();
  const [animals, setAnimals] = useState();

  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(false);
  const isLogin = useSelector((state) => state.auth.current);
  const logedIn = !!isLogin;
  const paginationDefault = {
    current_page: 1,
  };

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
    };
  }, [location.search]);

  useEffect(() => {
    if (!logedIn) {
      history.push('/login');
      localStorage.removeItem(StorageKeys.TOKEN);
    }
    if (logedIn) {
      (async () => {
        try {
          setProgress(true);
          const Animals = await animalApi.getAnimals(queryParams);
          setAnimals(Animals.animals);
          setPagination(Animals.pagination);
          console.log('Animals List: ', Animals);
        } catch (error) {
          console.log('Failed to fetch Animals List: ', error);
        }
        setProgress(false);
        setLoading(false);
      })();
    }
  }, [history, logedIn, queryParams]);

  return (
    <div>
      {progress && (
        <div className="overlay">
          <Loading />
        </div>
      )}
      <Header className="header" />
      <ScrollTop showBelow={400} />
      <div className="background">
        <img
          // src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/10/Desktop_PF_V4.jpg"
          src="/cat-dog.png"
          alt="animal"
          className="background-img"
        />
        <div className="background-content-root">
          <div className="background-content">
            <p className="content-title">Choose A Pet You Like Now</p>
            <p className="content-description">
              Get a quick look at pet's basic information by focus over it.
            </p>
            <button className="content-button">GET NOW</button>
          </div>
        </div>
      </div>
      <div className="list-page">
        {loading ? (
          <div>
            <AnimalSkeletonList length={20} />
            <Pagination pagination={paginationDefault} />
          </div>
        ) : (
          <div>
            <AnimalList animalsList={animals} />
            <br />
            <Pagination pagination={pagination} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ListPage;
