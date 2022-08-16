import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import { render } from '../render.js';

const FILMS_CARDS_AMOUNT = 6;

export default class FilmPresenter {

  moviesList = new FilmsListView();
  moviesContainer = new FilmsContainerView();
  moviesCard = new FilmCardView();
  showMoreButton = new ShowMoreButtonView();

  init = (mainContainer) => {
    this.mainContainer = mainContainer;

    render (this.moviesList, this.mainContainer);
    render (this.moviesContainer, this.moviesList.getElement());
    render (this.showMoreButton, this.mainContainer);
    for (let i = 0; i < FILMS_CARDS_AMOUNT; i++) {
      render (new FilmCardView, this.moviesContainer.getElement());

    }
  };
}
