import {inject} from 'aurelia-framework';
import {ColumnModel, WidgetModel} from 'models/index';

export class Column {
  constructor () {
    this.column = new ColumnModel();
  }

  activate(col) {
    this.column.id = col.id;
    this.column.name = col.name;
    this.column.widgets = col.widgets;
    this.column.width = col.width;
  }

  addWidget () {
    this.column.widgets.push(new WidgetModel());
  }
}

Array.prototype.move = function (old_index, new_index) {
  var element = this[old_index];
  this.splice(old_index, 1);
  this.splice(new_index, 0, element);
};
