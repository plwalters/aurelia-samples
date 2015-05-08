import {inject} from 'aurelia-framework';
import {Wizard} from './wizard';

@inject(Wizard)
export class WizardStepOne{
  constructor(wizard){
    this.wizard = wizard;
  }
}