import Constants from './constant';
import { v4 } from 'uuid';

export const addColor = (title, color) => ({
	type: Constants.ADD_COLOR,
	id: v4(),
	title,
	color,
	timestamp: new Date().toString()

});

export const removeColor = (id) => ({
	type: Constants.REMOVE_COLOR,
	id
});

export const rateColor = (id, rating) => ({
	type: Constants.RATE_COLOR,
	id,
	rating
});

export const sortColors = (sortBy) => ({
	type: Constants.SORT_COLOR,
	sortBy
})