import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/Star.css';

const Star = ({ selected = false, onClick = f => f }) => (
  <div
    className={(selected) ? 'star selected' : 'star'}
    onClick={onClick}
    role="presentation"
  />
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

Star.defaultProps = {
  selected: false,
  onClick: f => f,
};

export default Star;
