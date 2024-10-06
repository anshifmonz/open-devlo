import createLogger from "../utils/discordLogger.js";

function logger({ webHookUrl, iconUrl}) {
  const discordLogger = createLogger(webHookUrl, iconUrl);
  
  return (req, res, next) => {
    req.logger = {
      error: (message, err = false) => discordLogger.error(message, err, req),
      warn: (message, err = false) => discordLogger.warn(message, err, req),
      debug: (message, err = false) => discordLogger.debug(message, err, req),
      info: (message, err = false) => discordLogger.info(message, err, req)
    };
    next()
  };
}

export default logger;
