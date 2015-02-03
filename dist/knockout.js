System.register(["jquery", "knockout"], function (_export) {
  "use strict";

  var jquery, ko, _prototypeProperties, Welcome, UpperValueConverter;
  return {
    setters: [function (_jquery) {
      jquery = _jquery["default"];
    }, function (_knockout) {
      ko = _knockout["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Welcome = (function () {
        function Welcome(element) {
          var self = this;
          this.element = element;
          this.heading = ko.observable("Welcome to the Aurelia Navigation App - With Knockout!");
          this.firstName = ko.observable("John");
          this.lastName = ko.observable("Doe");
          this.fullName = ko.computed(function () {
            return self.firstName() + " " + self.lastName();
          });
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
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.firstName() + "!");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          attached: {
            value: function attached(element) {
              ko.applyBindings(this, jquery("#knockout-template")[0]);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Welcome;
      })();
      _export("Welcome", Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {}

        _prototypeProperties(UpperValueConverter, null, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return UpperValueConverter;
      })();
      _export("UpperValueConverter", UpperValueConverter);
    }
  };
});