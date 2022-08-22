import UserProfileView from './view/user-profile-view.js';
import FilterNavigationView from './view/filter-navigation-view.js';
import FooterStatisticView from './view/footer-statistic-view-temp.js';
import {render} from './render.js';
import FilmPresenter from './presenter/film-presenter.js';
import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.header__logo');
const mainElement = bodyElement.querySelector('main');
const footerElement = bodyElement.querySelector('.footer__statistics');

const filmsPresenter = new FilmPresenter();

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

render (new UserProfileView(), headerElement);
render (new FilterNavigationView(), mainElement);
render (new FooterStatisticView(), footerElement);

filmsPresenter.init(mainElement, filmsModel, commentsModel);
