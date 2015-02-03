System.register(["./amd/models", "aurelia-templating"], function (_export) {
  "use strict";

  var Models, Behavior, _prototypeProperties, Welcome;
  return {
    setters: [function (_amdModels) {
      Models = _amdModels["default"];
    }, function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Models = Models.Models;

      Welcome = (function () {
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
      _export("Welcome", Welcome);
    }
  };
});