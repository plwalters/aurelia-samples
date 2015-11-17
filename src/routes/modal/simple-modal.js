import {DialogController} from 'aurelia-dialog';

export class SimpleModal {
  static inject = [DialogController];
  constructor(controller){
    this.controller = controller;
  }
  activate(wizard){
    this.wizard = wizard;
  }
}
