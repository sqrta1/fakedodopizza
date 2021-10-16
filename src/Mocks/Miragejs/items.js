import { Response } from "miragejs";

export const getItems = (schema, request) => {
  const fakeError = Math.round(Math.random() * (10 - 1)) + 1 < 5;
  const items = schema.items.all();
  return new Response(200, {}, { error: false, result: items.models })
  return fakeError
    ? new Response(200, {}, { error: false, result: items.models })
    : new Response(503, {}, { error: true, message: "service is unavialable" });
};
