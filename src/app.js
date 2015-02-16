import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','layout'],  moduleId: 'layout',      nav: true, title:'Compose', someProperty: 'rocks'},
        { route: ['markdown','markdown.editor'],  moduleId: 'markdown.editor',      nav: true, title:'Markdown' },
        { route: ['html','html.render'],  moduleId: 'html.render',      nav: true, title:'HTML Render' },
        { route: ['knockout'],  moduleId: 'knockout',      nav: true, title:'Knockout' }
      ]);
    });
  }
}