import Models from './amd/models';
import {Behavior} from 'aurelia-templating';

Models = Models.Models;

export class Welcome{

  static inject() {
    return [Element];
  }

	constructor(element){
    this.element = element;
    this.mymarkdowntext = '#hey \n ##you';
	}
  attached(element) {
    console.log(element);
  }
}