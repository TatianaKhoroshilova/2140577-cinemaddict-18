import dayjs from 'dayjs';
import { names, surnames, comment, emotions } from './const.js';
import { getRandomInteger, getRandomValue } from '../utils.js';

const generateComment = () => ({
  author: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  comment,
  date: dayjs().subtract(getRandomInteger(0,9), 'day').toISOString(),
  emotions: getRandomValue(emotions),
});

const getCommentCount = (films) => films.reduce(
  (count, film) => count + film.comments.length, 0
);

const generateComments = (films) => {
  const commentCount = getCommentCount(films);

  return Array.from({length: commentCount}, (_value, index) =>{
    const commentString = generateComment();

    return {
      id: String(index + 1),
      ...commentString,
    };
  });
};

export {generateComments};


