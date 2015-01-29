define(["exports", "aurelia-templating", "showdown", "prism"], function (exports, _aureliaTemplating, _showdown, _prism) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var _interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
  };

  var Behavior = _aureliaTemplating.Behavior;
  var showdown = _interopRequire(_showdown);

  var prism = _interopRequire(_prism);

  var MarkdownComponentAttachedBehavior = (function () {
    function MarkdownComponentAttachedBehavior(element) {
      this.element = element;
      this.converter = new showdown.converter();
    }

    _prototypeProperties(MarkdownComponentAttachedBehavior, {
      metadata: {
        value: function metadata() {
          return Behavior.attachedBehavior("markdown-component").withProperty("value", "valueChanged", "markdown-component");
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
          this.element.innerHTML = this.converter.makeHtml(newValue.value.split("\n").map(function (line) {
            return line.trim();
          }).join("\n"));
          prism.highlightAll(this.element.querySelectorAll("code"));
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return MarkdownComponentAttachedBehavior;
  })();

  exports.MarkdownComponentAttachedBehavior = MarkdownComponentAttachedBehavior;
});