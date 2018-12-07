import React from 'react';
import PropTypes from 'prop-types';
import Scenic from './Scenic';
import '../../css/common.css';
import '../../css/ScenicList.css';

const ScenicList = ({ scenics = [] }) => (
  <div className="scenic-list">
    {(scenics.length === 0) ? <p className="no-tip">景区：0</p>
      : scenics.map(s => <Scenic key={s.id} {...s} />)}
  </div>
);

ScenicList.propTypes = {
  scenics: PropTypes.arrayOf(PropTypes.object),
};

ScenicList.defaultProps = {
  scenics: [],
};

export default ScenicList;
