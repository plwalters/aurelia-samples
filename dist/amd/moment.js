define(["exports", "aurelia-templating", "moment"], function (exports, _aureliaTemplating, _moment) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var _interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
  };

  var Behavior = _aureliaTemplating.Behavior;
  var moment = _interopRequire(_moment);

  var DateAttachedBehavior = (function () {
    function DateAttachedBehavior(element) {
      this.element = element;
    }

    _prototypeProperties(DateAttachedBehavior, {
      metadata: {
        value: function metadata() {
          return Behavior.attachedBehavior("date").withProperty("value", "valueChanged", "date");
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      inject: {
        value: function inject() {
          return [Element];
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    }, {
      valueChanged: {
        value: function valueChanged(newValue) {
          this.element.innerHTML = moment(newValue).format("LL");
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return DateAttachedBehavior;
  })();

  var TimeAttachedBehavior = (function () {
    function TimeAttachedBehavior(element) {
      this.element = element;
    }

    _prototypeProperties(TimeAttachedBehavior, {
      metadata: {
        value: function metadata() {
          return Behavior.attachedBehavior("time").withProperty("value", "valueChanged", "time");
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      inject: {
        value: function inject() {
          return [Element];
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    }, {
      valueChanged: {
        value: function valueChanged(newValue) {
          this.element.innerHTML = moment(newValue).format("LT");
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return TimeAttachedBehavior;
  })();

  var DateTimeAttachedBehavior = (function () {
    function DateTimeAttachedBehavior(element) {
      this.element = element;
    }

    _prototypeProperties(DateTimeAttachedBehavior, {
      metadata: {
        value: function metadata() {
          return Behavior.attachedBehavior("date-time").withProperty("value", "valueChanged", "date-time");
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      inject: {
        value: function inject() {
          return [Element];
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    }, {
      valueChanged: {
        value: function valueChanged(newValue) {
          console.log("showing it");
          this.element.innerHTML = moment(newValue).format("dddd, MMMM Do YYYY, h:mm:ss a");
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return DateTimeAttachedBehavior;
  })();

  exports.DateAttachedBehavior = DateAttachedBehavior;
  exports.TimeAttachedBehavior = TimeAttachedBehavior;
  exports.DateTimeAttachedBehavior = DateTimeAttachedBehavior;
});