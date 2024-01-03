import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "dotenv/config";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    name: "sbank_server",
    version: "1.0.0",
    status: "ok! uji coba server sbank",
  });
});

app.get("/ping", (c) => {
  return c.text("pong");
});

const port = 3000 || process.env.PORT;
console.log(`Server running at http://localhost:${port}`);

app.onError((err, c) => {
  console.error(err);
  return c.text(err.message, 500);
});

app.notFound((c) => {
  return c.text("Not Found", 404);
});

serve({
  fetch: app.fetch,
  port,
});
