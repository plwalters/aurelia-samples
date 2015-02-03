import {Behavior} from 'aurelia-templating';

export class Modal {
  static metadata(){
    return Behavior
      .customElement('modal')
      .withProperty('showing', 'valueChanged', 'modal');
  }

	constructor(){
    this.modal = new ModalObject();
    this.toggleShowing = function () { console.log(this.showing); this.showing = !this.showing; };
	}
  activate(value){
    this.toggle = value.toggle;
    console.log(value);
    this.showing = value.showing;
  }
  showingChanged(hey){
    console.log('hey you - ',hey);
  }
}

class ModalObject {  
  constructor(defaultval) {
    var self = this;
    self.showing = defaultval;
  }
}