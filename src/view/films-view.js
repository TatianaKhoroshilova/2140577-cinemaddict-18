import { createElement } from '../render.js';
import { createFilmListTemplate } from './films-list-view.js';

const createFilmViewTemplate = () => (`
<section class="films">
${createFilmListTemplate()}
</section>
`);

export default class FilmsView {
  getTemplate(){
    return createFilmViewTemplate();
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
