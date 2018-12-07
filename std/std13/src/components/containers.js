import { connect } from 'react-redux';
import ScenicList from './ui/ScenicList';
import { rateScenic } from '../actions';
import { sortScenics } from '../lib/helpers';

export const Scenics = connect(
  ({ scenics }, { match }) => ({
    scenics: sortScenics(scenics, match ? match.params.sort : 'popularize'),
  }),
  dispatch => ({
    onRate(id, rating) {
      dispatch(rateScenic(id, rating));
    },
  }),
)(ScenicList);


export default Scenics;
