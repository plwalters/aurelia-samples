System.register(["aurelia-templating", "moment"], function (_export) {
  "use strict";

  var Behavior, moment, _prototypeProperties, DateAttachedBehavior, TimeAttachedBehavior, DateTimeAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      DateAttachedBehavior = (function () {
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
      TimeAttachedBehavior = (function () {
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
      DateTimeAttachedBehavior = (function () {
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
      _export("DateAttachedBehavior", DateAttachedBehavior);

      _export("TimeAttachedBehavior", TimeAttachedBehavior);

      _export("DateTimeAttachedBehavior", DateTimeAttachedBehavior);
    }
  };
});