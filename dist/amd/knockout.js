define(["exports", "jquery", "knockout"], function (exports, _jquery, _knockout) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var _interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
  };

  var jquery = _interopRequire(_jquery);

  var ko = _interopRequire(_knockout);

  var Welcome = (function () {
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

  exports.Welcome = Welcome;
  var UpperValueConverter = (function () {
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

  exports.UpperValueConverter = UpperValueConverter;
});