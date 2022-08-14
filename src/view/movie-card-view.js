import { createElement } from '../render.js';
import { getMovieControlsTemplate } from './movie-card-controls-view.js';
import { getMovieCardInfoTemplate } from './movie-card-info-view.js';

const createMovieCardTemplate = () => (`
<article class="film-card">

${getMovieCardInfoTemplate()}
${getMovieControlsTemplate()}

</article>
`);

export default class MovieCardView {
  getTemplate(){
    return createMovieCardTemplate();
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

export {createMovieCardTemplate};
