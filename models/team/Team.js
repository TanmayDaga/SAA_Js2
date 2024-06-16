const db = require("../../config/db");
const {
  teamPagePositionTypesLength,
  teamPageTeamTypesLength,
} = require("../../utils/utils");

const TeamMembers = db.ORM.define(
  "Team",
  {
    id: {
      type: db.DataTypes.UUID,
      defaultValue: db.DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    imagePath: {
      type: db.DataTypes.TEXT,
      defaultValue: "/media/profileImages/profilePlaceHolder.png",
    },
    name: {
      type: db.DataTypes.STRING,
      allowNuLL: false,
    },
    position: {
      type: db.DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: teamPagePositionTypesLength,
      },
    },
    teamType: {
      type: db.DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: teamPageTeamTypesLength,
      },
    },
    quote: {
      type: db.DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: db.DataTypes.STRING,
    },
    email: {
      type: db.DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: db.DataTypes.STRING,
      allowNull: false,
    },
    instagramLink: {
      type: db.DataTypes.STRING,
    },
    linkedinLink: {
      type: db.DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

module.exports = {
  TeamMembers,
};
