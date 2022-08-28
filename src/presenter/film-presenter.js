import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import { render } from '../render.js';
import FilmDetailsView from '../view/film-details-view.js';

export default class FilmPresenter {

  #moviesList = new FilmsListView();
  #moviesContainer = new FilmsContainerView();
  #moviesCard = new FilmCardView();
  #showMoreButton = new ShowMoreButtonView();

  #filmDetailsComponent = null;
  #mainContainer = null;
  #filmsModel = null;
  #commentsModel = null;
  #films = [];

  init = (mainContainer, filmsModel, commentsModel) => {
    this.#mainContainer = mainContainer;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;

    this.#films = [...this.#filmsModel.get()];

    render (this.#moviesList, this.#mainContainer);
    render (this.#moviesContainer, this.#moviesList.element);
    render (this.#showMoreButton, this.#mainContainer);

    this.#films.forEach((film) => {
      this.#renderFilm(film, this.#moviesContainer);
    });

    render (this.showMoreButton, this.moviesList.element);
  };

  #renderFilm(film, container) {
    const filmCardComponent = new FilmCardView(film);
    const filmCardElement = filmCardComponent.element.querySelector('a');

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
}
