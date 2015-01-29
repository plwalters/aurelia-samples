define(["exports", "./models"], function (exports, _models) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var Models = _models.Models;
  var Column = (function () {
    function Column() {
      this.column = new Models.Column();
    }

    _prototypeProperties(Column, null, {
      activate: {
        value: function activate(col) {
          this.column.id = col.id;
          this.column.name = col.name;
          this.column.widgets = col.widgets;
          this.column.width = col.width;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      addWidget: {
        value: function addWidget() {
          this.column.widgets.push(new Models.Widget());
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return Column;
  })();

  exports.Column = Column;
});