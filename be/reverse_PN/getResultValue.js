const logger = require('../logger');

const resultValue = str => (numbers) => {
  if (numbers.length > 1) {
    logger(`long stack: input ---> ${str} stack state ---> ${numbers.join(',')}`);
    return NaN;
  }

  return numbers.pop();
};

module.exports = resultValue;
