import {DialogController} from 'aurelia-dialog';

export class WizardModal {
  static inject = [DialogController];
  constructor(controller){
    this.controller = controller;
    this.nextOrSave = 'Next';
    this.steps = [
      new Step(1, 'Step one', 'routes/modal/wizard-step-one'),
      new Step(2, 'Step two', 'routes/modal/wizard-step-two'),
      new Step(3, 'Step three', 'routes/modal/wizard-step-three')
    ];
    this.activeStep = this.steps[0];
  }
  activate(wizard){
    this.wizard = wizard;
  }
  nextStep(){
    if (this.activeStep.id === this.steps.length) {
      this.activeStep = this.steps[0];
      this.save();
    } else {
      if (this.activeStep.id === this.steps.length - 1) {
        this.nextOrSave = 'Save';
      } else {
        this.nextOrSave = 'Next';
      }
      this.activeStep = this.steps[this.activeStep.id];
    }
  }
  save() {
    this.controller.ok(this.wizard);
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
