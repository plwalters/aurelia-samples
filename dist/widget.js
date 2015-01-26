System.register(["./models"], function (_export) {
  "use strict";

  var Models, _prototypeProperties, Widget;
  return {
    setters: [function (_models) {
      Models = _models.Models;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Widget = (function () {
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
      _export("Widget", Widget);
    }
  };
});