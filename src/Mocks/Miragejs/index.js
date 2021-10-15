import { Server, Model, Response, belongsTo } from 'miragejs';
import itemsData from '../data/cards.json';
import { getItems } from './items';

const tmpFunc = (db, request) => {
  return new Response(503, {}, { response: 'e' });
};

const RoutesHandlers = [
  {
    type: 'get',
    url: '/items',
    handler: getItems,
  },
];

const mirageJS = new Server({
  models: {
    items: Model,
  },
  seeds(server) {
    server.db.loadData({
      items: itemsData,
    });
  },
  routes() {
    this.namespace = '/api';
    RoutesHandlers.forEach(({ type, url, handler, response, auth }) => {
      //this[type](url, auth ? withAuth(handler) : handler, response);
      this[type](url, handler, response);
    });
  },
});

export default mirageJS;
