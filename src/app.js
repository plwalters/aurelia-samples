import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','layout'],  moduleId: 'routes/layout',      nav: true, title:'Compose' },
      { route: ['html','html-render'],  moduleId: 'routes/html-render',      nav: true, title:'HTML Render' },
      { route: ['content-selectors'],  moduleId: 'routes/content-selectors/index',      nav: true, title:'Content Selectors' },
      { route: ['modal'],  moduleId: 'routes/modal/index',      nav: true, title:'Modal sample' }
    ]);

    this.router = router;
  }
}
