import {Models} from './models';

export class Modal {
	constructor(){
    this.modal = new ModalObject();
    this.showing;
    this.toggleShowing = function () { console.log(this.showing); this.showing = !this.showing; };
	}
  activate(value){
    this.modal.showing = value.showing;
    this.toggle = value.toggle;
    this.showing = this.modal.showing;
  }
}

class ModalObject {  
  constructor(defaultval) {
    var self = this;
    self.showing = defaultval;
  }
}