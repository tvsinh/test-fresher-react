import animalApi from 'api/animalApi';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ScrollTop from 'components/ScrollTop';
import StorageKeys from 'Constants/storage-keys';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import AnimalList from '../../components/AnimalList';
import Pagination from '../../components/Pagination';
import './style.css';

ListPage.propTypes = {};

function ListPage(props) {
  const history = useHistory();
  const [animals, setAnimals] = useState();
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState();
  const isLogin = useSelector((state) => state.auth.current);

  useEffect(() => {
    if (!isLogin) {
      history.push('/login');
      localStorage.removeItem(StorageKeys.TOKEN);
    }
    if (isLogin) {
      (async () => {
        try {
          const Animals = await animalApi.getAnimals();
          setAnimals(Animals.animals);
          setPagination(Animals.pagination);
          console.log('Animals List: ', Animals);
        } catch (error) {
          console.log('Failed to fetch Animals List: ', error);
        }
        setLoading(false);
      })();
    }
  }, [history, isLogin]);

  return (
    <div>
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
          <p>Loading...</p>
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
