import React from 'react';
import PropTypes from 'prop-types';
import '../../css/common.css';
import '../../css/ScenicDetail.css';

const ScenicDetail = ({title, history}) => {
	return (<div onClick={()=> history.goBack()} role="button" tabIndex="0">
				<p className="detail-title">{title}</p>
			</div>);
}

ScenicDetail.propTypes = {
	title: PropTypes.string.isRequired,
	history: PropTypes.shape({}).isRequired
}

export default ScenicDetail;