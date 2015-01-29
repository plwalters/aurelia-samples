define(["exports", "aurelia-router"], function (exports, _aureliaRouter) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var Router = _aureliaRouter.Router;
  var App = (function () {
    function App(router) {
      this.router = router;
      this.router.configure(function (config) {
        config.title = "Aurelia";
        config.map([{ route: ["", "layout"], moduleId: "layout", nav: true, title: "Compose" }, { route: ["markdown", "markdown.editor"], moduleId: "markdown.editor", nav: true, title: "Markdown" }, { route: ["html", "html.render"], moduleId: "html.render", nav: true, title: "HTML Render" }]);
      });
    }

    _prototypeProperties(App, {
      inject: {
        value: function inject() {
          return [Router];
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return App;
  })();

  exports.App = App;
});