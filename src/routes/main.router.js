const _ = require("lodash");

const router = async (fastify) => {
  fastify.get("/", home);
  fastify.get("/characters", characters);
  fastify.get("/about", about);
  fastify.post("/form", form);
};

module.exports = router;
