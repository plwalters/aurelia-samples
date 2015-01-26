System.register([], function (_export) {
  "use strict";

  var Column, Widget, Models;
  return {
    setters: [],
    execute: function () {
      Column = function Column(id, name, widgets, width) {
        this.id = id;
        this.name = name;
        this.widgets = widgets;
        this.width = width ? width : "12";
      };

      Widget = function Widget(id, name, width) {
        this.id = id;
        this.name = name;
        this.width = width ? width : "12";
      };

      Models = { Column: Column, Widget: Widget };
      _export("Models", Models);
    }
  };
});