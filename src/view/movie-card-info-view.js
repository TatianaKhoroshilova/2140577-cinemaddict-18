import { createElement } from '../render.js';

const getMovieCardInfoTemplate = () => (`<a class="film-card__link">
<h3 class="film-card__title">Made for Each Other</h3>
<p class="film-card__rating">5.8</p>
<p class="film-card__info">
  <span class="film-card__year">1939</span>
  <span class="film-card__duration">1h 32m</span>
  <span class="film-card__genre">Comedy</span>
</p>
<img src="./images/posters/made-for-each-other.png" alt="" class="film-card__poster">
<p class="film-card__description">John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…</p>
<span class="film-card__comments">56 comments</span>
</a>`);

export default class MovieInfoView {

  getTemplate(){
    return getMovieCardInfoTemplate();
  }

  getElement() {
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}

export {getMovieCardInfoTemplate};
