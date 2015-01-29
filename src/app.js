import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','layout'],  moduleId: 'layout',      nav: true, title:'Compose' },
        { route: ['markdown','markdown.editor'],  moduleId: 'markdown.editor',      nav: true, title:'Markdown' }
      ]);
    });
  }
}