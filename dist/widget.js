System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, Widget;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Widget = (function () {
        function Widget() {
          this.widget = new AWidget();
        }

        _prototypeProperties(Widget, null, {
          activate: {
            value: function activate(widget) {
              console.log(widget);
              this.widget.id = widget.id;
              this.widget.name = widget.name;
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