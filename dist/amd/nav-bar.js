define(["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var Behavior = _aureliaFramework.Behavior;
  var NavBar = (function () {
    function NavBar() {}

    _prototypeProperties(NavBar, {
      metadata: {
        value: function metadata() {
          return Behavior.withProperty("router");
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return NavBar;
  })();

  exports.NavBar = NavBar;
});