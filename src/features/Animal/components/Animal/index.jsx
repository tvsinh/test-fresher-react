import React from 'react';
import PropTypes from 'prop-types';
import { PHOTO_PLACEHOLDER } from 'Constants/common';
import './style.css';
import { useHistory } from 'react-router';

Animal.propTypes = {
  animal: PropTypes.object,
};

function Animal({ animal = {} }) {
  const history = useHistory();
  const handleDetailPage = () => {
    history.push(`animal/${animal.id}`);
  };
  const photoUrl = animal.photos.length ? animal?.photos[0]?.full : PHOTO_PLACEHOLDER;
  return (
    <div className="animal" onClick={handleDetailPage}>
      <div className="animal-img-box">
        <img alt="animalIMG" src={photoUrl} className="animal-img" />
      </div>
      <div className="animal-info">
        <p className="animal-name">{animal.name}</p>
        <div className="animal-detail-box">
          <div>
            <p className="animal-detail animal-species">Species: {animal.species}</p>
            <p className="animal-detail animal-age">Age: {animal.age}</p>
          </div>
          <div>
            <p className="animal-detail animal-size">Size: {animal.size}</p>
            <p className="animal-detail animal-gender">Gender: {animal.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal;
