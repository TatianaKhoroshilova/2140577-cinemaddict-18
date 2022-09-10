import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmListEmptyView from '../view/film-list-empty-view.js';
import { render } from '../render.js';
import FilmDetailsView from '../view/film-details-view.js';
import { FILM_COUNT, STEP_PER_SCROLL } from '../const.js';

export default class FilmPresenter {

  #moviesList = new FilmsListView();
  #moviesContainer = new FilmsContainerView();
  #moviesCard = new FilmCardView(film);
  #showMoreButton = new ShowMoreButtonView();

  #filmDetailsComponent = null;
  #mainContainer = null;
  #filmsModel = null;
  #commentsModel = null;
  #films = [];
  #renderedFilmsCount = STEP_PER_SCROLL;

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
    const filmCardElement = filmCardComponent.element.querySelector('.film-card__link');

    filmCardElement.addEventListener('click', ()=>{
      this.#addFilmDetailsComponent(film);
      document.addEventListener('keydown', this.#onEscKey);
    });
    render (filmCardComponent, container.element);
  }

  #renderFilmDetails(film) {
    const comments = [...this.#commentsModel.get(film)];

    this.#filmDetailsComponent = new FilmDetailsView(film, comments);

    const closeButtonFilmDetails = this.#filmDetailsComponent.element.querySelector('.film-details__close-btn');

    closeButtonFilmDetails.addEventListener('click', ()=> {
      this.#removeFilmDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKey);
    });

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
        this.#renderFilm(film, this.#moviesList.element);
      });

    this.#renderedFilmsCount += STEP_PER_SCROLL;
    if(this.#renderedFilmsCount >= this.#films.length){
      this.#showMoreButton.element.remove();
      this.#showMoreButton.removeElement();
    }
  };

  #renderFilmBoard = () => {
    render(this.#moviesCard, this.#moviesList.element);
    render(this.#moviesList, this.#mainContainer);
    render(this.#moviesContainer, this.#moviesList.element);

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
