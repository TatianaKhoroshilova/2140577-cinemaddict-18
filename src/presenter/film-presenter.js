import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import { render } from '../render.js';
import FilmDetailsView from '../view/film-details-view.js';

export default class FilmPresenter {

  moviesList = new FilmsListView();
  moviesContainer = new FilmsContainerView();
  moviesCard = new FilmCardView();
  showMoreButton = new ShowMoreButtonView();

  init = (mainContainer, filmsModel, commentsModel) => {
    this.mainContainer = mainContainer;
    this.filmsModel = filmsModel;
    this.commentsModel = commentsModel;

    this.films = [...filmsModel.get()];

    render (this.moviesList, this.mainContainer);
    render (this.moviesContainer, this.moviesList.getElement());
    render (this.showMoreButton, this.mainContainer);
    for (let i = 0; i < this.films.length; i++) {
      render (new FilmCardView(this.films[i]), this.moviesContainer.getElement());
    }

    render (this.showMoreButton, this.moviesList.getElement());

    const comments = [...this.commentsModel.get(this.films[0])];

    render (new FilmDetailsView(this.films[0], comments), this.mainContainer.parentElement);
  };
}
