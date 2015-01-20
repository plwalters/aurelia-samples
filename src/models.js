class Column {
  constructor(id, name, widgets, width) {
    this.id = id;
    this.name = name;
    this.widgets = widgets;
    console.log(width);
    this.width = width ? width : '12';
  }
}

class Widget {
  constructor(id, name, width) {
    this.id = id;
    this.name = name;
    this.width = width ? width : '12';
  }
}

var Models = { Column: Column, Widget: Widget };

export {
	Models
}