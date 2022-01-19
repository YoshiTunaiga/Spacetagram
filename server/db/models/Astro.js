const Sequelize = require("sequelize");
const db = require("../db");

const Astro = db.define("astro", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  img_src: {
    type: Sequelize.STRING,
    defaultValue:
      "https://i.pinimg.com/736x/07/a4/bc/07a4bc564dbedc540af1216093df9cb5.jpg",
  },
  description: {
    type: Sequelize.STRING,
    defaultValue: "Somewhere on Mars",
  },
});

module.exports = Astro;
