import animalApi from 'api/animalApi';
import StorageKeys from 'Constants/storage-keys';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import AnimalList from '../components/AnimalList';

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
  }, [history, isLogin]);
  return (
    <div>
      <p>animal list</p>
      <AnimalList animalsList={animals} />
    </div>
  );
}

export default ListPage;
