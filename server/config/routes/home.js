import { serverRouteRender, pageRender } from '../render';
import routes from 'modules/home/route';

export default function (app) {
  app.get('/', (req, res) => res.redirect('/home'));
  app.get('/home', (...args) => {
    serverRouteRender({
      page: 'index',
      routes
    }, ...args);
  });
  app.get('/home/server-render', (...args) => {
    serverRouteRender({
      page: 'index',
      routes
    }, ...args);
  });
  app.get('/home/*', (...args) => {
    pageRender({
      page: 'index'
    }, ...args);
  });
}
