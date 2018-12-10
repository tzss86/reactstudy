import Constants from '../constants';

export const scenic = (state = {}, action = { type: null }) => {
  switch (action.type) {
    case Constants.RATE_SCENIC:
      return (state.id !== action.id) ? state
        : {
          ...state,
          rating: action.rating,
        };
    default:
      return state;
  }
};

export const scenics = (state = [], action = { type: null }) => {
  switch (action.type) {
    case Constants.RATE_SCENIC:
      return state.map(c => scenic(c, action));
    case Constants.INIT_LIST_ACTION:
      return [...action.scenics];
    default:
      return state;
  }
};

export const fetching = (state = 'none', action = {type:null}) => {
  switch (action.type){
    case Constants.FETCH_SCENIC:
      return action.msg ? action.msg : state;
    default:
      return state;
  }
};