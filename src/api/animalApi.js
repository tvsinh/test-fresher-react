import axiosClient from './axiosClient';
import StorageKeys from 'Constants/storage-keys';
const token = localStorage.getItem(StorageKeys.TOKEN);

const animalApi = {
  async getAnimals() {
    const url = '/animals';
    const animals = await axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return animals;
  },
  async getAnimal(id) {
    const url = `/animals/${id}`;
    const animal = await axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return animal;
  },
};

export default animalApi;
