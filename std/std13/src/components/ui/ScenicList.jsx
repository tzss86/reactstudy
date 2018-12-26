import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scenic from './Scenic';
import '../../css/common.css';
import '../../css/ScenicList.css';

class ScenicList extends Component {
  componentDidMount() {
    const { onFetch = f => f } = this.props;
    onFetch();
  }

  render() {
    const { scenics = [], onRate = f => f } = this.props;
    return (
      <div className="scenic-list">
        {(scenics.length === 0) ? <p className="no-tip">景区：0</p>
          : scenics.map(s => (
            <Scenic
              key={s.id}
              {...s}
              onRate={rating => onRate(s.id, rating)}
            />
          ))}
      </div>
    );
  }
}


ScenicList.propTypes = {
  scenics: PropTypes.arrayOf(PropTypes.object),
  onRate: PropTypes.func,
};

ScenicList.defaultProps = {
  scenics: [],
  onRate: f => f,
};

export default ScenicList;
