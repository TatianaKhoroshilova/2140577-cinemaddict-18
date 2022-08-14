import {createElement} from '../render.js';

const footerStatisticTemplate = () =>(`
  <p>130 291 movies inside</p>
`);

export default class FooterStatisticView {
  getTemplate(){
    return footerStatisticTemplate();
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
