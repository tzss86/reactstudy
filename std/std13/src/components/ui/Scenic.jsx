import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { withRouter } from 'react-router-dom';
import '../../css/common.css';
import '../../css/Scenic.css';
import BgDefault from '../../images/default_pic.png';

class Scenic extends Component {
  render() {
    const {
      id, title, tag, popularize, background, address, rating, onRate, history
    } = this.props;
    return (
      <div className="scenic" data-id={id}>
        <img alt="" className="bg" src={background || BgDefault} />
        <p className="title" onClick={()=> history.push(`/${id}`)}>{title}</p>
        <div className="starbox">
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
        <p className="popularize">{popularize}</p>
        <p className="tag">{tag}</p>
        <p className="address">{address}</p>
      </div>
    );
  }
}

Scenic.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.string,
  tag: PropTypes.string,
  address: PropTypes.string,
  popularize: PropTypes.number,
  rating: PropTypes.number,
  onRate: PropTypes.func,
  history: PropTypes.shape({}).isRequired
};

Scenic.defaultProps = {
  background: '',
  tag: '景区',
  address: '地址',
  popularize: 0,
  rating: 5,
  onRate: f => f,
};

export default withRouter(Scenic);
