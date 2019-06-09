const operations = (operator) => {
  const operatorsList = {
    '+': (n1, n2) => n1 + n2,
    '−': (n1, n2) => n1 - n2,
    '-': (n1, n2) => n1 - n2,
    '/': (n1, n2) => n1 / n2,
    '*': (n1, n2) => n1 * n2,
    '÷': (n1, n2) => n1 / n2,
    '×': (n1, n2) => n1 * n2,
  };

  return operatorsList[operator];
};

module.exports = operations;
