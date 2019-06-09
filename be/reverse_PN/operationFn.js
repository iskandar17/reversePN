const calculate = require('./calculate');

const operationFn = stack => (operation) => {
  const operationResult = calculate(stack)(operation);
  stack.push(operationResult);
  return stack;
};

module.exports = operationFn;
