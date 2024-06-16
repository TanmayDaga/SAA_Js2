const logger = require("../utils/logger");

async function init() {

  await require("./home/init").init();
  await require("./team/init").init();
  await require("./events/init").init();

}

init()
  .then(() => logger("Seeding done successfully", "success"))
  .catch((err) => logger(`Seeding cannot be done.${err}`, "error"));
