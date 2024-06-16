const db = require("../../config/db");

const EventTypes = db.ORM.define("EventTypes", {
  id: {
    type: db.DataTypes.UUID,
    defaultValue: db.DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: db.DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please enter EventType name",
      },
    },
  },
});

module.exports = { EventTypes };
