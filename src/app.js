import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','layout'],  moduleId: 'layout',      nav: true, title:'Compose' },
      // { route: ['markdown','markdown-editor'],  moduleId: 'markdown-editor',      nav: true, title:'Markdown' },
      { route: ['html','html-render'],  moduleId: 'html-render',      nav: true, title:'HTML Render' },
      // { route: ['knockout'],  moduleId: 'knockout',      nav: true, title:'Knockout' },
      { route: ['content-selectors'],  moduleId: 'content-selectors',      nav: true, title:'Content Selectors' },
      { route: ['modal'],  moduleId: 'modal/index',      nav: true, title:'Modal sample' }
    ]);

    this.router = router;
  }
}
