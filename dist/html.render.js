System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, HtmlRender;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      HtmlRender = (function () {
        function HtmlRender(element) {
          this.element = element;
          this.myhtml = "<div class=\"container-fluid\"><h2>HTML Render</h2><div class=\"row\"><div class=\"col-sm-6\" style=\"background: yellow; height: 100px;\">Check out rendered HTML</div></div><div class=\"row\"><div class=\"col-sm-6 col-sm-offset-6\" style=\"background: whitesmoke; height: 100px;\">Some more html content!</div></div></div>";
        }

        _prototypeProperties(HtmlRender, {
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

        return HtmlRender;
      })();
      _export("HtmlRender", HtmlRender);
    }
  };
});