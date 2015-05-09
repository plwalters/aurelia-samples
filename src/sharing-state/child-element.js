import {inject} from 'aurelia-framework';
import {ParentElement} from './parent-element';

@inject(ParentElement)
export class ChildElement{
  constructor(parentelement){
    this.parentelement = parentelement;
  }
}