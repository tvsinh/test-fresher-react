import React from 'react';
import PropTypes from 'prop-types';
import Animal from '../Animal';
import './style.css';

AnimalList.propTypes = {
  animalsList: PropTypes.array,
};

function AnimalList({ animalsList = [] }) {
  return (
    <div className="animal-list">
      {animalsList.map((animal) => (
        <div key={animal.id} className="animals">
          <Animal animal={animal} />
        </div>
      ))}
    </div>
  );
}

export default AnimalList;
