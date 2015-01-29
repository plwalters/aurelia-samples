define(["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var Behavior = _aureliaTemplating.Behavior;
  var HtmlRenderAttachedBehavior = (function () {
    function HtmlRenderAttachedBehavior(element) {
      this.element = element;
      this.sanitizer = "<div>hey</div>";
    }

    _prototypeProperties(HtmlRenderAttachedBehavior, {
      metadata: {
        value: function metadata() {
          return Behavior.attachedBehavior("html-render").withProperty("value", "valueChanged", "html-render");
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
          this.element.innerHTML = newValue;
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return HtmlRenderAttachedBehavior;
  })();

  exports.HtmlRenderAttachedBehavior = HtmlRenderAttachedBehavior;
});