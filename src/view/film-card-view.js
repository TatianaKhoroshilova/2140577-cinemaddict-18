import AbstractView from '../framework/view/abstract-view';
import { year } from '../mock/const.js';
import { formatMinutesToTime, getRandomInteger } from '../utils.js';

const createFilmCardTemplate = ({filmInfo}) =>
  `
<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${filmInfo.title}</h3>
            <p class="film-card__rating">${filmInfo.totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${getRandomInteger(year.MIN, year.MAX)}</span>
              <span class="film-card__duration">${formatMinutesToTime(filmInfo.runtime)}</span>
              <span class="film-card__genre">${filmInfo.genre}</span>
            </p>
            <img src=${filmInfo.poster} alt="${filmInfo.alternativeTitle}" class="film-card__poster">
            <p class="film-card__description">${filmInfo.alternativeTitle}</p>
            <span class="film-card__comments">18 comments</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>
`;

export default class FilmCardView extends AbstractView{

  #film = null;

  constructor (film) {
    super();
    this.#film = film;
  }

  get template() {
    return createFilmCardTemplate(this.#film);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();

    this._callback.click();
  };

}

