import { Response } from "miragejs";

export const emailDispatch = (schema, request) => {
  const { email } = JSON.parse(request.requestBody);
  console.log(schema.db.users);
  let user = schema.db.users.findBy({ email: email });
  console.log(user);
  if (!user) {
    user = schema.db.users.insert({ email: email });
  }
  const code = generateCode();
  schema.db.users.update(user.id, { code: code });
  console.log(`auth code for user ${user.email} is ${code}`);
  return new Response(200, {}, { error: false, status: "ok" });
};

export const codeDispatch = (schema, request) => {
  const { code, email } = JSON.parse(request.requestBody);

  const user = schema.db.users.findBy({ email: email });
  if (code == user.code) {
    const jwt = fakeJwt();
    schema.db.users.update(user.id, { jwt: jwt, code: "" });
    console.log(schema.db.users);
    return new Response(200, {}, { error: false, status: "ok", jwt: jwt });
  }
};

const handleLogout = (schema, request) => {
  const { jwt } = JSON.parse(request.requestBody);
  schema.db.users.findBy({ jwt: jwt });
};

const generateCode = () => {
  return Math.round(Math.random() * (1e5 - 1)) + 1;
};
export const fakeJwt = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
