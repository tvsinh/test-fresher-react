import React from 'react';
import PropTypes from 'prop-types';
import { PHOTO_PLACEHOLDER } from 'Constants/common';

Animal.propTypes = {
  animal: PropTypes.object,
};

function Animal({ animal = {} }) {
  const photoUrl = animal.photos.length ? animal?.photos[0]?.full : PHOTO_PLACEHOLDER;
  return (
    <div>
      <img
        alt="animalIMG"
        src={photoUrl}
        width="300px"
        height="300px"
        style={{ objectFit: 'cover' }}
      />
      <p style={{ fontSize: '18px', fontWeight: 500 }}>{animal.name}</p>
      <p>Species: {animal.species}</p>
      <p>Size: {animal.size}</p>
      <p>Age: {animal.age}</p>
      <p>Gender: {animal.gender}</p>
    </div>
  );
}

export default Animal;
