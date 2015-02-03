System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, Modal, ModalObject;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Modal = (function () {
        function Modal() {
          this.modal = new ModalObject();
          this.toggleShowing = function () {
            console.log(this.showing);this.showing = !this.showing;
          };
        }

        _prototypeProperties(Modal, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("modal").withProperty("showing", "valueChanged", "modal");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(value) {
              this.toggle = value.toggle;
              console.log(value);
              this.showing = value.showing;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          showingChanged: {
            value: function showingChanged(hey) {
              console.log("hey you - ", hey);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Modal;
      })();
      _export("Modal", Modal);

      ModalObject = function ModalObject(defaultval) {
        var self = this;
        self.showing = defaultval;
      };
    }
  };
});