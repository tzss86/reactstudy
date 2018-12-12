import { connect } from 'react-redux';
import ScenicList from './ui/ScenicList';
import { rateScenic, fetchScenicData } from '../actions';
import { sortScenics } from '../lib/helpers';

const mapStateToProps =({scenics},{match}) => {
  return { 
    scenics: sortScenics(scenics, match.params.sort)
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    onRate(id, rating){dispatch(rateScenic(id, rating))},
    onFetch(){dispatch(fetchScenicData())}
    }
    
}
export const Scenics = connect(
 mapStateToProps,
 mapDispatchToProps
)(ScenicList);


export default Scenics;
