import {inject} from 'aurelia-framework';

@inject(Element)
export class HtmlRendererCustomAttribute {
  constructor(element) {
    this.element = element;
  }
  valueChanged(newValue){
    this.element.innerHTML = newValue;
  }
}
