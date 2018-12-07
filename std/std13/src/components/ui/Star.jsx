import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/Star.css';

const Star = ({ selected = false }) => (
  <div className={(selected) ? 'star selected' : 'star'} />
);

Star.propTypes = {
  selected: PropTypes.bool,
};

Star.defaultProps = {
  selected: false,
};

export default Star;
