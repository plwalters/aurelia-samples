import {Models} from './models';
import sortable from 'sortable';

export class Column {
  constructor () {
    this.column = new Models.Column();
  }

  activate(col) {
    this.column.id = col.id;
    this.column.name = col.name;
    this.column.widgets = col.widgets;
    this.column.width = col.width;
  }

  addWidget () {
  	this.column.widgets.push(new Models.Widget());
  }

  attached() {
    var list = document.querySelectorAll(".column")[0];
    console.log(list);
    sortable.create(list, {
      animation: 150,
      draggable: '.widget-row'
    });
  }
}
