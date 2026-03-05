import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";

export const createApp = (quiz) => {
  const app = new Hono();
  app.use(async (context, next) => {
    context.set("quiz", quiz);
    await next();
  });

  app.use(logger());

  app.get("*", serveStatic({ root: "./public" }));

  return app;
};
