define(["exports", "./models"], function (exports, _models) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var Models = _models.Models;
  var Modal = (function () {
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

  exports.Modal = Modal;
  var ModalObject = function ModalObject(defaultval) {
    var self = this;
    self.showing = defaultval;
  };
});