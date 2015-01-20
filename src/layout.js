import {Models} from './models';

export class Welcome{
	constructor(){
		this.heading = 'Welcome to the Aurelia Layout App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.availableColumns = [
      new Option ('1', '1 Column', 
                  [new Models.Column(0, 'Column 1', [new Models.Widget('1', 'Widget 1', '12')], '12')]),
      new Option ('2', '2 Columns', 
                  [new Models.Column(1, 'Column 1', [new Models.Widget('1', 'Widget 1', '12')], '6'), 
                  new Models.Column(2, 'Column 2', [new Models.Widget('2', 'Widget 2', '6'), new Models.Widget('4', 'Widget 4', '6')], '6')]),
      new Option ('2', '2 Columns', 
                  [new Models.Column(1, 'Column 1', [new Models.Widget('1', 'Widget 1', '12')], '4'), 
                  new Models.Column(2, 'Column 2', [new Models.Widget('2', 'Widget 2', '6'), new Models.Widget('4', 'Widget 4', '6')], '4'),
                  new Models.Column(3, 'Column 3', [new Models.Widget('3', 'Widget 3', '12')], '4')])
    ];
    this.selectedColumns = this.availableColumns[0];
	}

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
}

class Option {
  constructor(id, name, cols) {
    this.id = id;
    this.name = name;
    this.columns = cols ? cols : [];
  }
}