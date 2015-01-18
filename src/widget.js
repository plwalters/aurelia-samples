export class Widget {
  constructor () {
    this.widget = new AWidget();
  }

  activate(widget) {
    console.log(widget);
    this.widget.id = widget.id;
    this.widget.name = widget.name;
  }
}