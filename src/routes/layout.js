import {ColumnModel, WidgetModel} from 'models/index';
import {bindable, inject} from 'aurelia-framework';

export class Layout{
  heading = 'Welcome to the Aurelia Layout App!';
  firstName = 'John';
  lastName = 'Doe';
  myDate = new Date();
  showing = false;
  yoHey = "hey";

  constructor(){
    this.availableColumns = [
      new Option ('1', '1 Column',
                  [new ColumnModel(0, 'Column 1', [new WidgetModel('1', 'Widget 1', '12')], '12')]),
      new Option ('2', '2 Columns',
                  [new ColumnModel(1, 'Column 1', [new WidgetModel('1', 'Widget 1', '12')], '6'),
                  new ColumnModel(2, 'Column 2', [new WidgetModel('2', 'Widget 2', '6'), new WidgetModel('4', 'Widget 4', '6')], '6')]),
      new Option ('3', '3 Columns',
                  [new ColumnModel(1, 'Column 1', [new WidgetModel('1', 'Widget 1', '12')], '4'),
                  new ColumnModel(2, 'Column 2', [new WidgetModel('2', 'Widget 2', '6'), new WidgetModel('4', 'Widget 4', '6')], '4'),
                  new ColumnModel(3, 'Column 3', [new WidgetModel('3', 'Widget 3', '12')], '4')])
    ];
    this.selectedColumns = this.availableColumns[0];
  }
  getSomething(value) {
    return value.value ? value.value : value;
  }
  changeSomething() {
    this.yoHey = { value: 'hey yo' };
  }
  showModal() {
    this.showing = !this.showing;
  }
}

class Option {
  constructor(id, name, cols) {
    this.id = id;
    this.name = name;
    this.columns = cols ? cols : [];
  }
}
