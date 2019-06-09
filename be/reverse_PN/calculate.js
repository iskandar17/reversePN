const calculate = numbers => (operationFn) => {
  const right = numbers.pop();
  const left = numbers.pop();
  const operationResult = operationFn(left, right);
  return operationResult;
};

module.exports = calculate;
