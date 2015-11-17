import {bindable, inject} from 'aurelia-framework';
import {WizardData} from 'routes/modal/wizard-data';
import {WizardModal} from './wizard-modal';
import {SimpleModal} from './simple-modal';
import {DialogService} from 'aurelia-dialog';

@inject(WizardData, DialogService)
export class Index {
  constructor(wizard, dialogService) {
    this.wizard = wizard;
    this.dialogService = dialogService;
  }
  showModal(){
    this.dialogService.open({ viewModel: SimpleModal, model: this.wizard}).then(response => {
      if (!response.wasCancelled) {
        console.log('good - ', response.output);
      } else {
        console.log('bad');
      }
      console.log(response.output);
    });
  }
  showWizard() {
    this.dialogService.open({ viewModel: WizardModal, model: this.wizard}).then(response => {
      if (!response.wasCancelled) {
        console.log('good - ', response.output);
      } else {
        console.log('bad');
      }
    });
  }
}
