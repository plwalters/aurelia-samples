import {Behavior} from 'aurelia-templating';

export class HtmlRenderAttachedBehavior {
  static metadata(){
    return Behavior
      .attachedBehavior('html-render')
      .withProperty('value', 'valueChanged', 'html-render');
  }

  static inject() { return [Element]; }

  constructor(element) {
    this.element = element;
    this.sanitizer = '<div>hey</div>';
  }

  valueChanged(newValue){
    this.element.innerHTML = newValue;
  }

}