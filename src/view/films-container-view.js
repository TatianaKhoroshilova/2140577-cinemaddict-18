import { createElement } from '../render.js';
import { createMovieCardTemplate } from './movie-card-view.js';

const createFilmContainerTemplate = () => (`
<div class="films-list__container">

${createMovieCardTemplate()}

</div>
`);

export default class FilmContainerView {
  getTemplate(){
    return createFilmContainerTemplate();
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

export {createFilmContainerTemplate};
