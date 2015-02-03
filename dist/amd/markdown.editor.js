define(["exports", "./amd/models", "aurelia-templating"], function (exports, _amdModels, _aureliaTemplating) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var _interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
  };

  var Models = _interopRequire(_amdModels);

  var Behavior = _aureliaTemplating.Behavior;


  Models = Models.Models;

  var Welcome = (function () {
    function Welcome(element) {
      this.element = element;
      this.mymarkdowntext = "#hey \n ##you";
      this.mycallback = function () {
        console.log("hey pat");
      };
    }

    _prototypeProperties(Welcome, {
      inject: {
        value: function inject() {
          return [Element];
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    }, {
      attached: {
        value: function attached(element) {
          console.log(element);
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return Welcome;
  })();

  exports.Welcome = Welcome;
});