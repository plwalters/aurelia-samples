export class ColumnModel {
  constructor(id, name, widgets, width) {
    this.id = id;
    this.name = name;
    this.widgets = widgets;
    this.width = width ? width : '12';
  }
}

export class WidgetModel {
  constructor(id, name, width) {
    this.id = id;
    this.name = name;
    this.width = width ? width : '12';
  }
}
