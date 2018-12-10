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

export const fetchScenicData = () => (dispatch) => {
  dispatch({
    type: Constants.FETCH_SCENIC,
    msg: 'pending',
  });

  fetch('http://mp.1trip.com/api/v1/scenicservice/overview/distance/0?user_lng=104.06792346&user_lat=30.67994285')
    .then(response => response.json())
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
      }
    });
};

export { rateScenic as default };
