import {WidgetModel} from 'models/index';

export class Widget {
  constructor () {
    this.widget = new WidgetModel();
  }

  activate(widget) {
    this.widget.id = widget.id;
    this.widget.name = widget.name;
    this.widget.width = widget.width;
    this.widget.offset = 12 - parseInt(widget.width);
  }
}
