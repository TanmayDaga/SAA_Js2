const db = require("../../config/db");

const CarouselMedia = db.ORM.define("CarouselMedia", {
  id: {
    type: db.DataTypes.UUID,
    defaultValue: db.DataTypes.UUIDV4,
    primaryKey: true,
  },
  path: {
    type: db.DataTypes.STRING,
    allowNuLL: false,
  },
});

module.exports = { CarouselMedia };
