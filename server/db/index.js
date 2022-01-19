const db = require("./db");

const Astro = require("./models/Astro");

module.exports = {
  db,
  models: {
    Astro,
  },
};
