import express from "express";
import path from "path";
import favicon from "express-favicon";
import hotMiddleware from "webpack-hot-middleware";

const addProductionMiddlewares = app => {
  app.use(favicon("./public/favicon.png"));
  app.use(express.static(path.resolve("public/dist/")));
  app.get("/*", (_, res) =>
    res.sendFile("index.html", { root: "./public/dist" }),
  );
  return app;
};

const addDevMiddlewares = app => {
  app.use(favicon(path.join(__dirname, "../../public/favicon.png")));
  app.use(express.static(path.join(__dirname, "../../public")));
  app.use(hotMiddleware);
  return app;
};

const addMiddlewares = app => {
  if(process.env.NODE_ENV === "production") {
      return addProductionMiddlewares(app)
  }
  return addDevMiddlewares(app);
};

export default addMiddlewares;
