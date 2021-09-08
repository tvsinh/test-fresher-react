import axiosClient from './axiosClient';
import StorageKeys from 'Constants/storage-keys';

const animalApi = {
  getAnimals() {
    const token = localStorage.getItem(StorageKeys.TOKEN);
    const url = '/animals';
    const animals = axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return animals;
  },
  getAnimal(id) {
    const token = localStorage.getItem(StorageKeys.TOKEN);
    const url = `/animals/${id}`;
    const animal = axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return animal;
  },
};

export default animalApi;
