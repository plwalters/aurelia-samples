System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "aurelia-skeleton-navigation/*": "lib/*.js"
  }
});

System.config({
  "map": {
    "aurelia-binding": "github:aurelia/binding@0.3.2",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.9.3",
    "aurelia-http-client": "github:aurelia/http-client@0.4.3",
    "aurelia-loader": "github:aurelia/loader@0.3.3",
    "aurelia-metadata": "github:aurelia/metadata@0.3.1",
    "aurelia-path": "github:aurelia/path@0.4.2",
    "aurelia-templating": "github:aurelia/templating@0.8.7",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.7.2",
    "bootstrap": "github:twbs/bootstrap@3.3.2",
    "font-awesome": "npm:font-awesome@4.3.0",
    "handlebars": "npm:handlebars@2.0.0",
    "jquery": "npm:jquery@2.1.3",
    "knockout": "npm:knockout@3.2.0",
    "prism": "github:LeaVerou/prism@gh-pages",
    "showdown": "github:showdownjs/showdown@0.3.4",
    "github:aurelia/binding@0.2.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.2"
    },
    "github:aurelia/binding@0.3.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.2"
    },
    "github:aurelia/bootstrapper@0.9.3": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.2",
      "aurelia-framework": "github:aurelia/framework@0.8.5",
      "aurelia-history": "github:aurelia/history@0.2.2",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.3",
      "aurelia-loader-default": "github:aurelia/loader-default@0.4.1",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.2",
      "aurelia-router": "github:aurelia/router@0.5.3",
      "aurelia-templating": "github:aurelia/templating@0.8.7",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.8.4",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.8.4",
      "aurelia-templating-router": "github:aurelia/templating-router@0.9.2"
    },
    "github:aurelia/dependency-injection@0.3.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/dependency-injection@0.4.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/framework@0.8.5": {
      "aurelia-binding": "github:aurelia/binding@0.3.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.1",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.2",
      "aurelia-templating": "github:aurelia/templating@0.8.7"
    },
    "github:aurelia/history-browser@0.2.3": {
      "aurelia-history": "github:aurelia/history@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/http-client@0.4.3": {
      "aurelia-path": "github:aurelia/path@0.4.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/loader-default@0.4.1": {
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2"
    },
    "github:aurelia/loader@0.3.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.10",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.4"
    },
    "github:aurelia/router@0.5.3": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.1",
      "aurelia-history": "github:aurelia/history@0.2.2",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-binding@0.7.2": {
      "aurelia-binding": "github:aurelia/binding@0.2.2",
      "aurelia-templating": "github:aurelia/templating@0.7.2"
    },
    "github:aurelia/templating-binding@0.8.4": {
      "aurelia-binding": "github:aurelia/binding@0.3.2",
      "aurelia-templating": "github:aurelia/templating@0.8.7"
    },
    "github:aurelia/templating-resources@0.8.4": {
      "aurelia-binding": "github:aurelia/binding@0.3.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.1",
      "aurelia-templating": "github:aurelia/templating@0.8.7",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-router@0.9.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.1",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-router": "github:aurelia/router@0.5.3",
      "aurelia-templating": "github:aurelia/templating@0.8.7"
    },
    "github:aurelia/templating@0.7.2": {
      "aurelia-binding": "github:aurelia/binding@0.2.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.2",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating@0.8.7": {
      "aurelia-binding": "github:aurelia/binding@0.3.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-fs@0.1.0": {
      "assert": "npm:assert@1.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.2": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.3"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:handlebars@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "optimist": "npm:optimist@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "uglify-js": "npm:uglify-js@2.3.6"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery@2.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:knockout@3.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:uglify-js@2.3.6": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "optimist": "npm:optimist@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.1.43",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

