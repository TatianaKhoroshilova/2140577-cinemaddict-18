import { getRandomInteger } from '../utils';

export const generateFilter = () =>({
  'watchlist': getRandomInteger(1,6),
  'history': getRandomInteger(12,139),
  'favorites': getRandomInteger(2,6)
});
