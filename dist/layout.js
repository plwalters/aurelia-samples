System.register(["./models", "aurelia-router", "aurelia-framework"], function (_export) {
  "use strict";

  var Models, Router, Parent, _prototypeProperties, Welcome, Option;
  return {
    setters: [function (_models) {
      Models = _models.Models;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      Parent = _aureliaFramework.Parent;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Welcome = (function () {
        function Welcome(router) {
          this.router = router;
          this.heading = "Welcome to the Aurelia Layout App!";
          this.firstName = "John";
          this.lastName = "Doe";
          this.myDate = new Date();
          this.availableColumns = [new Option("1", "1 Column", [new Models.Column(0, "Column 1", [new Models.Widget("1", "Widget 1", "12")], "12")]), new Option("2", "2 Columns", [new Models.Column(1, "Column 1", [new Models.Widget("1", "Widget 1", "12")], "6"), new Models.Column(2, "Column 2", [new Models.Widget("2", "Widget 2", "6"), new Models.Widget("4", "Widget 4", "6")], "6")]), new Option("2", "2 Columns", [new Models.Column(1, "Column 1", [new Models.Widget("1", "Widget 1", "12")], "4"), new Models.Column(2, "Column 2", [new Models.Widget("2", "Widget 2", "6"), new Models.Widget("4", "Widget 4", "6")], "4"), new Models.Column(3, "Column 3", [new Models.Widget("3", "Widget 3", "12")], "4")])];
          this.selectedColumns = this.availableColumns[0];
          this.showing = false;
          var self = this;
          this.showModal = function () {
            self.showing = !self.showing;
          };
          this.yoHey = "hey";
          this.changeSomething = function () {
            console.log("changing");
            this.yoHey = { value: "hey yo" };
          };
        }

        _prototypeProperties(Welcome, {
          inject: {
            value: function inject() {
              return [Parent.of(Router)];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          getSomething: {
            value: function getSomething(value) {
              console.log("changing value - ", value);
              return value.value ? value.value : value;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              console.log(this.router);
              console.log(this.router.currentInstruction);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Welcome;
      })();
      _export("Welcome", Welcome);

      Option = function Option(id, name, cols) {
        this.id = id;
        this.name = name;
        this.columns = cols ? cols : [];
      };
    }
  };
});