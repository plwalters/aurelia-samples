System.register([], function (_export) {
  "use strict";

  var Column, Widget, Models;
  return {
    setters: [],
    execute: function () {
      Column = function Column(id, name, widgets) {
        this.id = id;
        this.name = name;
        this.widgets = widgets;
      };

      Widget = function Widget(id, name) {
        this.id = id;
        this.name = name;
      };

      Models = { Column: Column, Widget: Widget };
      _export("Models", Models);
    }
  };
});