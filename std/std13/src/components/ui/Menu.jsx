import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../css/common.css';
import '../../css/Menu.css';

const selectedStyle = { color: 'red' };

const Menu = ({ match }) => (
  <div className="menu">
    <NavLink className="item" style={match.isExact && selectedStyle} to="/">热门</NavLink>
    <NavLink className="item" activeStyle={selectedStyle} to="/sort/title">名字</NavLink>
    <NavLink className="item" activeStyle={selectedStyle} to="/sort/rating">星数</NavLink>
  </div>
);

Menu.propTypes = {
  match: PropTypes.shape({isExact: PropTypes.bool,params: PropTypes.shape({})})
};

Menu.defaultProps = {
  match: {},
};

export default Menu;
