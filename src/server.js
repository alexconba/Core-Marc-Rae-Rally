const pino = require("pino");
const path = require("path");
const fastify = require("fastify")({
  logger: pino({
    transport: {
      target: "pino-pretty",
    },
  }),
});

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "../public"),
  prefix: "/public/",
});

//fastify.register(require("point-of-view"), {
//engine: {
//   handlebars: require("handlebars"),
// },
//root: path.join(__dirname, "../views"),
// layout: "/templates/main.hbs",
//});

//fastify.register(require("@fastify/formbody"));

//fastify.register(require("./routes/main.router"));

const port = 3000;
fastify.listen(port, () => {
  fastify.log.info(`Listening at http://localhost:${port}`);
});
