define(["exports"], function (exports) {
  "use strict";

  var Column = function Column(id, name, widgets, width) {
    this.id = id;
    this.name = name;
    this.widgets = widgets;
    this.width = width ? width : "12";
  };

  var Widget = function Widget(id, name, width) {
    this.id = id;
    this.name = name;
    this.width = width ? width : "12";
  };

  var Models = { Column: Column, Widget: Widget };

  exports.Models = Models;
});