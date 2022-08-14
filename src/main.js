import UserProfileView from './view/user-profile-view.js';
import FilterNavigationView from './view/filter-navigation-view.js';
import FooterStatisticView from './view/footer-statistic-view-temp.js';
import {render} from './render.js';
import MoviesPresenter from './presenter/movie-presenter.js';

const bodyEl = document.querySelector('body');
const headerEl = bodyEl.querySelector('.header__logo');
const mainEl = bodyEl.querySelector('main');
const footerEl = bodyEl.querySelector('.footer__statistics');
const filmsPresenter = new MoviesPresenter();

render (new UserProfileView(), headerEl);
render (new FilterNavigationView(), mainEl);
render (new FooterStatisticView(), footerEl);

filmsPresenter.init(mainEl);
