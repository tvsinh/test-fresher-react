import React from 'react';
import PropTypes from 'prop-types';
import Animal from './Animal';

AnimalList.propTypes = {
  animalsList: PropTypes.array,
};

function AnimalList({ animalsList = [] }) {
  return (
    <div>
      {animalsList.map((animal) => (
        <div key={animal.id} style={{ display: 'flex' }}>
          <Animal animal={animal} />
        </div>
      ))}
    </div>
  );
}

export default AnimalList;
