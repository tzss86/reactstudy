import Constants from './constants';

export const rateScenic = (id, rating) => ({
  type: Constants.RATE_SCENIC,
  id,
  rating,
});

export const initListAction = scenics => ({
  type: Constants.INIT_LIST_ACTION,
  scenics,
});

export const fetchScenicData = () => (dispatch, getState) => {

  if(getState().fetching !== "finish"){
    dispatch({
      type: Constants.FETCH_SCENIC,
      msg: 'pending',
    });
    console.log('loading data...');
    fetch('http://mp.1trip.com/api/v1/scenicservice/overview/distance/0?user_lng=104.06792346&user_lat=30.67994285')
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
        dispatch({
            type: Constants.FETCH_SCENIC,
            msg: 'error',
          });
      })
      .then((data) => {
        if (data.status) {
          const res = data.result.list.map(v => ({
            id: v._id,
            title: v.name,
            tag: v.tag,
            address: v.address,
            popularize: v.popularize,
            background: v.newcover ? v.newcover.url : '',
            rating: 0,
          }));
          dispatch({
            type: Constants.FETCH_SCENIC,
            msg: 'finish',
          });
          const action = initListAction(res);
          dispatch(action);
        } else {
          dispatch({
            type: Constants.FETCH_SCENIC,
            msg: 'error',
          });
        }
      });
  }
};

export { rateScenic as default };
