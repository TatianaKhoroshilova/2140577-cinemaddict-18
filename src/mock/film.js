import dayjs from 'dayjs';
import { yearsIssuancePeriod, description, countries, posters, titleOfFilm, genres, runTime,
  ageCategoty, RATING, names, surnames, AMOUNT_OF_GENRES_OF_FILM, MAX_COMMENTS_FOR_FILM, NAME_AMOUNT, COUNT_OF_FILMS} from './const.js';
import { getRandomInteger, getRandomValue } from '../utils.js';

const generateFilm = () => ({
  title: getRandomValue(titleOfFilm),
  alternativeTitle: getRandomValue(titleOfFilm),
  totalRating: getRandomInteger(RATING.MIN, RATING.MAX),
  poster: getRandomValue(posters),
  ageRating: getRandomInteger(ageCategoty.MIN, ageCategoty.MAX),
  director: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  writers: Array.from({length: NAME_AMOUNT}, ()=>`${getRandomValue(names)} ${getRandomValue(surnames)}`),
  actors: Array.from({length: NAME_AMOUNT}, ()=>`${getRandomValue(names)} ${getRandomValue(surnames)}`),
  release: {
    date: dayjs().subtract(getRandomInteger(yearsIssuancePeriod.MIN, yearsIssuancePeriod.MAX), 'year').toISOString(),
    releaseCountry: getRandomValue(countries),
  },
  runtime: getRandomInteger(runTime.MIN, runTime.MAX),
  genre: Array.from({length: getRandomInteger(AMOUNT_OF_GENRES_OF_FILM.MIN, AMOUNT_OF_GENRES_OF_FILM.MAX)}, () => getRandomValue(genres)),
  description: getRandomValue(description),
});

const generateFilms = () => {

  const films = Array.from({length: COUNT_OF_FILMS}, generateFilm);
  let totalCommentsCount = 0;

  return films.map((film, index) => {
    const hasComment = getRandomInteger(0, 1);

    const filmCommentCount = hasComment
      ? getRandomInteger(1, MAX_COMMENTS_FOR_FILM)
      : 0;

    totalCommentsCount += filmCommentCount;

    return {
      id: String(index + 1),
      comments: (hasComment)
        ? Array.from({length: filmCommentCount},
          (_value, commentIndex) => String(totalCommentsCount - commentIndex)
        )
        : [],
      filmInfo: film,
    };
  });
};

export {generateFilms};
