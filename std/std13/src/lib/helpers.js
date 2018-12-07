import { compose } from 'redux';

const sortByString = field => (a, b) => ((a[field].toLowerCase() < b[field].toLowerCase())
  ? -1
  : 1);

const sortByNumber = field => (a, b) => b[field] - a[field];

const whichSort = (type, field) => ((type === 'string') ? sortByString(field) : sortByNumber(field));

export const sortFunction = (sort) => {
  if (sort === 'SORTED_BY_TITLE') {
    return whichSort('string', 'title');
  } if (sort === 'SORTED_BY_RATING') {
    return whichSort('number', 'rating');
  }
  return whichSort('number', 'popularize');
};

const getSortState = (sortBy = 'popularize',
  stateHash = {
    popularize: 'SORTED_BY_POPU',
    title: 'SORTED_BY_TITLE',
    rating: 'SORTED_BY_RATING',
  }) => stateHash[sortBy];

const locateSortFunction = compose(
  sortFunction,
  getSortState,
);

export const sortScenics = (scenics, sortBy) => compose(
  fn => [...scenics].sort(fn),
  locateSortFunction,
)(sortBy);
