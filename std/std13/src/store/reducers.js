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
    default:
      return state;
  }
};
