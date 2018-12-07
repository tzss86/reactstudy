import Constants from './constants';

export const rateScenic = (id, rating) => ({
  type: Constants.RATE_SCENIC,
  id,
  rating,
});

export { rateScenic as default };
