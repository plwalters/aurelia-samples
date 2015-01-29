import {Behavior} from 'aurelia-templating';

import showdown from 'showdown';
import prism from 'prism';

//import 'prism/themes/prism-okaidia.css!';

export class MarkdownComponentAttachedBehavior {
  static metadata(){
    return Behavior
      .attachedBehavior('markdown-component')
      .withProperty('value', 'valueChanged', 'markdown-component');
  }

  static inject() { return [Element]; }

  constructor(element) {
    this.element = element;
    // An instance of the converter
    this.converter = new showdown.converter();
  }

  valueChanged(newValue){
    this.element.innerHTML = this.converter.makeHtml(
      newValue.value.split('\n').map((line) => line.trim()).join('\n')
    );
    prism.highlightAll(this.element.querySelectorAll('code'));
  }
}