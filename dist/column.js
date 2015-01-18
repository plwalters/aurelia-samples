System.register(["./models"], function (_export) {
  "use strict";

  var Models, _prototypeProperties, Column;
  return {
    setters: [function (_models) {
      Models = _models.Models;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Column = (function () {
        function Column() {
          this.column = new Models.Column();
        }

        _prototypeProperties(Column, null, {
          activate: {
            value: function activate(col) {
              console.log(col.widgets);
              this.column.id = col.id;
              this.column.name = col.name;
              this.column.widgets = col.widgets;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Column;
      })();
      _export("Column", Column);
    }
  };
});