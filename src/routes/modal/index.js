import {bindable, inject} from 'aurelia-framework';
import {Wizard} from 'routes/modal/wizard';

@inject(Wizard)
export class Index {
  showing = false;
  wizardShowing = false;
  constructor(wizard){
    console.log('constructring')
    this.wizard = wizard;
    this.steps = [
      new Step(1, 'Step one', 'routes/modal/wizard-step-one'),
      new Step(2, 'Step two', 'routes/modal/wizard-step-two'),
      new Step(3, 'Step three', 'routes/modal/wizard-step-three')
    ];
    this.activeStep = this.steps[0];
  }
  showModal(){
    this.showing = true;
  }
  closeModal(){
    this.showing = false;
  }
  showWizard(){
    this.wizardShowing = true;
  }
  nextStep(){
    var self = this;
    if (this.activeStep.id === this.steps.length) {
      this.activeStep = this.steps[0];
      self.wizardShowing = false;
    } else {
      this.activeStep = this.steps[this.activeStep.id];
    }
  }
  closeWizard(){
    if (this.activeStep.id === this.steps.length) {
      this.activeStep = this.steps[0];
      self.wizardShowing = false;
    } else {
      this.wizardShowing = false;
    }
  }
}

class Step {
  id = 0;
  title = '';
  path = '';
  constructor(id, title, path){
    this.id = id;
    this.title = title;
    this.path = path;
  }
}
