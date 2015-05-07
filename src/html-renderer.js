import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('html-renderer')
@inject(Element)
export class HtmlRenderer {
  constructor(element) {
    this.element = element;
  }
  valueChanged(newValue){
    this.element.innerHTML = newValue;
  }
}
