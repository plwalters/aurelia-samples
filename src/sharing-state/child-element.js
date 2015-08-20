import {inject} from 'aurelia-framework';
import {ParentElement} from 'templates/parent-element';

@inject(ParentElement)
export class ChildElement{
  constructor(parentelement){
    this.parentelement = parentelement;
  }
}