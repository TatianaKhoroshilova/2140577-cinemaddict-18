import UserProfileView from './view/user-profile-view.js';
import FilterNavigationView from './view/filter-navigation-view.js';
import FooterStatisticView from './view/footer-statistic-view-temp.js';
import {render} from './render.js';
import FilmPresenter from './presenter/film-presenter.js';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.header__logo');
const mainElement = bodyElement.querySelector('main');
const footerElement = bodyElement.querySelector('.footer__statistics');
const filmsPresenter = new FilmPresenter();

render (new UserProfileView(), headerElement);
render (new FilterNavigationView(), mainElement);
render (new FooterStatisticView(), footerElement);

filmsPresenter.init(mainElement);
