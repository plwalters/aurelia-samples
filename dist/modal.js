System.register(["./models"], function (_export) {
  "use strict";

  var Models, _prototypeProperties, Modal, ModalObject;
  return {
    setters: [function (_models) {
      Models = _models.Models;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Modal = (function () {
        function Modal() {
          this.modal = new ModalObject();
          this.showing;
          this.toggleShowing = function () {
            console.log(this.showing);this.showing = !this.showing;
          };
        }

        _prototypeProperties(Modal, null, {
          activate: {
            value: function activate(value) {
              this.modal.showing = value.showing;
              this.toggle = value.toggle;
              this.showing = this.modal.showing;
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