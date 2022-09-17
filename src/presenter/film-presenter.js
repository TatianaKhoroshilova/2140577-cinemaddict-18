import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmListEmptyView from '../view/film-list-empty-view.js';
import { remove, render } from '../framework/render.js';
import FilmDetailsView from '../view/film-details-view.js';
import { FILM_COUNT, STEP_PER_SCROLL } from '../const.js';

export default class FilmPresenter {

  #filmDetailsComponent = null;
  #mainContainer = null;
  #filmsModel = null;
  #commentsModel = null;
  #films = [];
  #renderedFilmsCount = STEP_PER_SCROLL;

  #moviesList = new FilmsListView();
  #moviesContainer = new FilmsContainerView();
  #showMoreButton = new ShowMoreButtonView();

  constructor (mainContainer, filmsModel, commentsModel) {
    this.#mainContainer = mainContainer;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;
  }

  init = () => {


    this.#films = [...this.#filmsModel.get()];

    this.#renderFilmBoard();
  };

  #renderFilm(film, container) {
    const filmCardComponent = new FilmCardView(film);

    const addFilmDetailsClickHandler = () => {
      this.#addFilmDetailsComponent(film);
      document.addEventListener('keydown', this.#onEscKey);
    };
    filmCardComponent.setClickHandler(addFilmDetailsClickHandler);
    render (filmCardComponent, container);
  }

  #renderFilmDetails(film) {
    const comments = [...this.#commentsModel.get(film)];

    this.#filmDetailsComponent = new FilmDetailsView(film, comments);

    const closeFilmDetailsClickHandler = () => {
      this.#removeFilmDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKey);
    };

    this.#filmDetailsComponent.setCloseButtonFilmDetailsClickHandler(closeFilmDetailsClickHandler);

    render(this.#filmDetailsComponent, this.#mainContainer.parentElement);
  }

  #addFilmDetailsComponent = (film) => {
    this.#renderFilmDetails(film);
    document.body.classList.add('hide-overflow');
  };

  #removeFilmDetailsComponent = () => {
    this.#filmDetailsComponent.element.remove();
    this.#filmDetailsComponent = null;
    document.body.classList.remove('hide-overflow');
  };

  #onEscKey = (evt) =>{
    if(evt.key === 'Escape' || evt.key === 'Esc'){
      evt.preventDefault();
      this.#removeFilmDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKey);
    }
  };

  #showMoreButtonHandler = (evt) => {
    evt.preventDefault();

    this.#films
      .slice(this.#renderedFilmsCount, this.#renderedFilmsCount + STEP_PER_SCROLL)
      .forEach((film) => {
        this.#renderFilm(film, this.#moviesContainer.element);
      });

    this.#renderedFilmsCount += STEP_PER_SCROLL;
    if(this.#renderedFilmsCount >= FILM_COUNT){
      remove(this.#showMoreButton);
    }
  };

  #renderFilmBoard = () => {

    render(this.#moviesContainer, this.#moviesList.element);
    render(this.#moviesList, this.#mainContainer);

    this.#films.slice(0, this.#renderedFilmsCount).forEach((film) => {
      this.#renderFilm(film, this.#moviesContainer.element);
    });
    if (this.#renderedFilmsCount <= FILM_COUNT) {
      render(this.#showMoreButton, this.#moviesList.element);
      this.#showMoreButton.element.addEventListener('click', this.#showMoreButtonHandler);
    } else {
      render(new FilmListEmptyView(), this.#mainContainer);
    }
  };
}
