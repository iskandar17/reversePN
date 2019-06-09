const fs = require('fs');
const path = require('path');

const tmpPath = path.resolve(__dirname, 'tmp');
const logFile = path.resolve(__dirname, 'tmp/log.txt');

const log = (str) => {
  if (fs.existsSync(logFile)) {
    fs.appendFile(logFile, `\n${str}`, (err) => {
      if (err) throw err;

      console.log(`${str} logged`);
    });
  } else {
    fs.mkdir(tmpPath, { recursive: false }, (err) => {
      if (err) throw err;

      fs.writeFile(logFile, str, (error) => {
        if (error) throw error;

        console.log(`${str} logged`);
      });

    });
  }
};

module.exports = log;
