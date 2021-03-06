import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import '../../css/common.css';
import '../../css/StarRating.css';

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => (
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) => (
      <Star
        key={window.parseInt(i.toString())}
        selected={i < starsSelected}
        onClick={() => onRate(i + 1)}
      />
    ))}
    <p>
你给它
      {starsSelected}
星，满分
      {totalStars}
星
    </p>
  </div>
);

StarRating.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func,
};

StarRating.defaultProps = {
  starsSelected: 0,
  totalStars: 5,
  onRate: f => f,
};

export default StarRating;
