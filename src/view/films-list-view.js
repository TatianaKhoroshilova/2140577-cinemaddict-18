import { createElement } from '../render.js';
import { createFilmContainerTemplate } from './films-container-view.js';

const createFilmListTemplate = () => (`
<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      ${createFilmContainerTemplate()}
</section>
`);

export default class FilmListView {
  getTemplate(){
    return createFilmListTemplate();
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

export {createFilmListTemplate};
