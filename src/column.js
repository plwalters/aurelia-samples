import {Models} from './models';

export class Column {
  constructor () {
    this.column = new Models.Column();
  }

  activate(col) {
    console.log(col.widgets);
    //this.column = new AColumn(col.id, col.name, col.widgets);
    this.column.id = col.id;
    this.column.name = col.name;
    this.column.widgets = col.widgets;
  }
}