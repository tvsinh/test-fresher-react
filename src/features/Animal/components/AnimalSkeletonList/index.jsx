import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { PHOTO_PLACEHOLDER } from 'Constants/common';

AnimalSkeletonList.propTypes = {
  length: PropTypes.number,
};

function AnimalSkeletonList({ length = 8 }) {
  const photoUrl = PHOTO_PLACEHOLDER;
  return (
    <div>
      <div className="animal-skeleton-list">
        {Array.from(new Array(length)).map((x, index) => (
          <div key={index} className="animal-skeleton">
            <div className="animal-skeleton-img-box">
              <img alt="animalIMG" src={photoUrl} className="animal-skeleton-img" />
            </div>
            <div className="animal-skeleton-info">
              <div className="animal-skeleton-name"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimalSkeletonList;
