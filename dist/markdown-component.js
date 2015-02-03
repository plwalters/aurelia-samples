System.register(["aurelia-templating", "showdown", "prism"], function (_export) {
  "use strict";

  var Behavior, showdown, prism, _prototypeProperties, MarkdownComponentAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_showdown) {
      showdown = _showdown["default"];
    }, function (_prism) {
      prism = _prism["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      MarkdownComponentAttachedBehavior = (function () {
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
          attached: {
            value: function attached() {
              console.log(this.value);
              this.value.somethingElse();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
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
      _export("MarkdownComponentAttachedBehavior", MarkdownComponentAttachedBehavior);
    }
  };
});