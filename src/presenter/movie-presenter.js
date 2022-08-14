import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmListView from '../view/films-list-view.js';
import FilmContainerView from '../view/films-container-view.js';
import MovieCardView from '../view/movie-card-view.js';
import { render } from '../render.js';

export default class MoviesPresenter {

  moviesList = new FilmListView();
  moviesContainer = new FilmContainerView();
  moviesCard = new MovieCardView();
  showMoreButton = new ShowMoreButtonView();

  init = (mainContainer) => {
    this.mainContainer = mainContainer;

    render (this.moviesList, this.mainContainer);
    render (this.moviesContainer, this.moviesList.getElement());
    render (this.showMoreButton, this.mainContainer);
    for (let i = 0; i < 6; i++){
      render (new MovieCardView, this.moviesContainer.getElement());

    }
  };
}
