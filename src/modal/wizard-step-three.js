import {inject} from 'aurelia-framework';
import {Wizard} from './wizard';

@inject(Wizard)
export class WizardStepThree{
  constructor(wizard){
    this.wizard = wizard;
  }
}