import animalApi from 'api/animalApi';
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
    <>
      <Header />
      <div className="list-page">
        <ScrollTop showBelow={400} />
        <h4>animal list</h4>

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
    </>
  );
}

export default ListPage;
