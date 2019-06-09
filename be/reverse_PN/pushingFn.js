const strToNumb = require('./stringToNumber');

const pushingFn = stack => (value) => {
  const convertedToNumber = strToNumb(value);
  stack.push(convertedToNumber);
  return stack;
};

module.exports = pushingFn;
