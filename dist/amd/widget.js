define(["exports", "./models"], function (exports, _models) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var Models = _models.Models;
  var Widget = (function () {
    function Widget() {
      this.widget = new Models.Widget();
    }

    _prototypeProperties(Widget, null, {
      activate: {
        value: function activate(widget) {
          this.widget.id = widget.id;
          this.widget.name = widget.name;
          this.widget.width = widget.width;
          this.widget.offset = 12 - parseInt(widget.width);
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return Widget;
  })();

  exports.Widget = Widget;
});