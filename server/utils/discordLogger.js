const logTypesColor = {
  error: 0xff0000,
  warn: 0xffff00,
  debug: 0x00ff00,
  info: 0x0000ff
}

/**
* Sends a log message to Discord
* @param {String} type - The type of message ('error', 'warning', 'debug', 'info')
* @param {String} message - The message content to send
* @param {Object} err - For retreiving the line number and file name (optional)
* @throws {Error} If the log type is invalid
*/

const createLogger = (webHookUrl, iconUrl) => {
  const sendLogToDiscord = (type, message, err = false, req) => {
    if (!logTypesColor[type]) throw new Error(`Invalid log type: ${type}. Allowed types are ${Object.keys(logTypes).join(', ')}.`)
    
    const path = req?.originalUrl || 'N/A';
    const ip = req?.ip || 'N/A';
    const ipV4 = ip.startsWith('::ffff:') ? ip.slice(7) : ip;
    const isVowels = ['a', 'e', 'i', 'o', 'u'].includes(type[0]);

    const reqBody = {
      username: 'Open Devlo Logger',
      embeds: [
        {
          title: `This is ${isVowels ? 'an ' : 'a '} ${type.toUpperCase()} message`,
          description: message,
          color: logTypesColor[type],
          timestamp: new Date().toISOString(),
          fields: [
            {
              name: 'API Endpoint',
              value: path,
              inline: true 
            },
            {
              name: 'IP Address',
              value: ipV4,
              inline: true
            }
          ],
          footer: {
            text: 'Open Devlo Logs',
            icon_url: iconUrl
          }
        }
      ]
    };
    if (err) {
      const lineNumber = {
        name: 'Line Number',
        value: err.stack.split('\n')[1].match(/:(\d+):\d+/)[1] || 'N/A',
        inline: true
      }
      const fileName = {
        name: 'File Name',
        value: err.stack.split('\n')[1].match(/([^/]+\.js)/)[0] || 'N/A',
        inline: true
      }
      reqBody.embeds[0].fields.push(lineNumber);
      reqBody.embeds[0].fields.push(fileName);
    }
    
    fetch(webHookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
    .catch(err => console.log('Error Sending log to discord: ', err.message));
  }

  return {
    error: (message, err, req) => sendLogToDiscord('error', message, err, req),
    warn: (message, err, req) => sendLogToDiscord('warn', message, err, req),
    debug: (message, err, req) => sendLogToDiscord('debug', message, err, req),
    info: (message, err, req) => sendLogToDiscord('info', message, err, req)
  } 
}

export default createLogger; 
