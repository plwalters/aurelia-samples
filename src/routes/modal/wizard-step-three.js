import {inject} from 'aurelia-framework';
// import {Wizard} from './wizard';
import {WizardData} from 'routes/modal/wizard-data';

@inject(WizardData)
export class WizardStepThree{
  constructor(wizard){
    this.wizard = wizard;
  }
}
