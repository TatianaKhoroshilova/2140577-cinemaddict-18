import { getRandomInteger } from "../utils";

const NAME_AMOUNT = 2;

const MAX_COMMENTS_FOR_FILM = 4;

const COUNT_OF_FILMS = 22;

const AMOUNT_OF_GENRES_OF_FILM = {
  MIN: 1,
  MAX: 4
};

const RATING = {
  MIN: 0,
  MAX: 10
};

const ageCategoty = {
  MIN: 0,
  MAX: 18
};

const runTime = {
  MIN: 60,
  MAX: 180
};

const genres = [
  'horror',
  'comedy',
  'thriller',
  'animation',
  'drama',
  'biopic',
  'tvshow'
];
const titleOfFilm = [
  'The Man with the Golden Arm',
  'The Dance of Life',
  'Popeye the Sailor Meets Sindbad the Sailor',
  'Sagebrush Trail',
  'Santa Claus Conquers the Martians',
];
const posters = [
  'images/posters/made-for-each-other.png',
  'images/posters/sagebrush-trail.jpg',
  'images/posters/popeye-meets-sinbad.png',
  'images/posters/the-dance-of-life.jpg ',
];

const names = [
  'Ivan',
  'Tom',
  'Ann',
  'Michael',
  'Uwe',
  'Takeshi',
];

const surnames = [
  'Ford',
  'Smith',
  'Riddle',
  'Petrov',
  'Ginout',
  'Kitano',
];

const authors = [
  'Belle Bolyn',
  'Adam McEvoy',
  'John Snow',
  'Maragareth Yo'
];

const emotions = ['smile', 'puke', 'sleeping', 'angry'];

const countries = ['USA', 'France', 'Russia', 'Italy', 'Japan'];

const description = [
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
  'Aliquam erat volutpat',
];

const comment = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
  'Aliquam erat volutpat',
];
const yearsIssuancePeriod = {
  MIN: 1,
  MAX: 7
};

const year = {
  MIN: 1930,
  MAX: 2020
};

export {
  comment,
  year,
  description,
  countries,
  emotions,
  posters,
  titleOfFilm,
  genres,
  runTime,
  ageCategoty,
  RATING ,
  names,
  surnames,
  authors,
  yearsIssuancePeriod,
  AMOUNT_OF_GENRES_OF_FILM,
  MAX_COMMENTS_FOR_FILM,
  NAME_AMOUNT,
  COUNT_OF_FILMS,
};
