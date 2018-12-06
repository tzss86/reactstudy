import React, { Component } from 'react';
import '../../css/common.css';
import '../../css/ScenicList.css';
import MyDefaultPic from '../../images/home/default_pic.png';

class ScenicList extends Component {
  render() {
    return (
      <ul>
        <li className='box'>文殊院<img alt='' src={MyDefaultPic}/></li>
        <li className="box">宽窄巷子</li>
        <li className="box">青羊宫</li>
      </ul>
    );
  }
}

export default ScenicList;
