import {createElement} from '../render.js';

const createFooterStatisticTemplate = () => (`
  <p>130 291 movies inside</p>
`);

export default class FooterStatisticView {
  #element = null;

  get template() {
    return createFooterStatisticTemplate();
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
