import { Server, Model, Response, belongsTo } from "miragejs";
import itemsData from "../data/cards.json";
import { getItems } from "./items";
import { codeDispatch, emailDispatch } from "./Auth";

const tmpFunc = (db, request) => {
  return new Response(503, {}, { response: "e" });
};

const RoutesHandlers = [
  {
    type: "get",
    url: "/items",
    handler: getItems,
  },
  {
    type: "post",
    url: "/auth",
    handler: emailDispatch,
  },
  {
    type: "patch",
    url: "/auth",
    handler: codeDispatch,
  },
];

const mirageJS = new Server({
  models: {
    items: Model,
    users: Model,
  },
  seeds(server) {
    server.db.loadData({
      items: itemsData,
      users: [],
    });
  },
  routes() {
    this.namespace = "/api";
    RoutesHandlers.forEach(({ type, url, handler, response, auth }) => {
      //this[type](url, auth ? withAuth(handler) : handler, response);
      this[type](url, handler, response);
    });
  },
});

export default mirageJS;
