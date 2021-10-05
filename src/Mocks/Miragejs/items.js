import { Response } from "miragejs";

export const getItems = (schema, request) => {
    console.log(schema)
  const items = schema.items.all();
  return new Response(200, {}, { error: false, result: items.models });
};
