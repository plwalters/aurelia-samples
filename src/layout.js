import {Models} from './models';

export class Welcome{
	constructor(){
		this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.availableColumns = [
      new Option ('1', '1 Column', 
                  [new Models.Column(0, 'Column 1', new Models.Widget('1', 'Widget 1'))]),
      new Option ('2', '2 Columns', 
                  [new Models.Column(1, 'Column 1', new Models.Widget('2', 'Widget 2')), 
                  new Models.Column(2, 'Column 2', new Models.Widget('3', 'Widget 3'))])
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