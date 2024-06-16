const colors = require("colors");
const path = require("path");

// FIXME: Some errors occuring
// function getDetails(num = 3) {
//   const e = new Error();
//   const regex = /\((.*):(\d+):(\d+)\)$/;
//   const match = regex.exec(e.stack.split("\n")[num]);
//   const filepath = match[1];
//   const fileName = path.basename(filepath);
//   const line = match[2];
//   const column = match[3];
//   return {
//     filepath,
//     fileName,
//     line,
//     column,
//   };
// }

/**
 * @typedef {"info" | "error" | "success" | "debug"} LogLevel
 */
/**
 * Logs a message with a specified level.
 *
 * @param {string} message - The message to log.
 * @param {LogLevel} [level="info"] - The level of the log (info, error, success, debug).
 */
function logger(message, level = "info") {
  const timestamp = new Date().toISOString();
  let coloredMessage;

  switch (level) {
    case "error":
      coloredMessage = colors.red(
        `${timestamp}: ERROR: ${message}`
      );
      break;
    case "success":
      coloredMessage = colors.green(
        `${timestamp}: SUCCESS: ${message}`
      );
      break;
    case "debug":
      coloredMessage = colors.grey(
        `${timestamp}: DEBUG: ${message}`
      );
      break;
    default:
      coloredMessage = colors.white(
        `${timestamp}: INFO: ${message}`
      );
      break;
  }

  console.log(coloredMessage);
}

module.exports = logger;
