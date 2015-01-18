class Column {
  constructor(id, name, widgets) {
    this.id = id;
    this.name = name;
    this.widgets = widgets;
  }
}

class Widget {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

var Models = { Column: Column, Widget: Widget };

export {
	Models
}