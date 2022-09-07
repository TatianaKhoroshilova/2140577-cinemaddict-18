import { createElement } from '../render.js';
import { formatMinutesToTime, formatToYear } from '../utils.js';


const createFilmCardTemplate = ({title, alternativeTitle, totalRating, release, date, runtime,genre, poster}) =>
  `
<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${formatToYear(release.date)}</span>
              <span class="film-card__duration">${formatMinutesToTime(runtime)}</span>
              <span class="film-card__genre">${genre}</span>
            </p>
            <img src=${poster} alt="${alternativeTitle}" class="film-card__poster">
            <p class="film-card__description">${alternativeTitle}</p>
            <span class="film-card__comments">18 comments</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>
`;

export default class FilmCardView {
  #element = null;
  #film = null;

  constructor (film) {
    this.#film = film;
  }

  get template() {
    return createFilmCardTemplate(this.#film);
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

