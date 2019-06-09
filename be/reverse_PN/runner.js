const operationFn = require('./operationFn');
const operations = require('./operations');
const pushingFn = require('./pushingFn');
const resultValue = require('./getResultValue');

const runPN = (type) => {
  const numbers = [];
  const itaeationType = {
    string: (input) => {
      const currentResultValue = resultValue(input);
      const whitespace = /\s/;
      let currentSymbol = '';

      for (let i = 0, len = input.length; i < len; i += 1) {
        const operation = operations(input[i]);
        if (operation) {
          operationFn(numbers)(operation);
        } else if (whitespace.test(input[i])) {
          if (currentSymbol.trim()) {
            pushingFn(numbers)(currentSymbol);
            currentSymbol = '';
          }
        } else {
          currentSymbol += input[i];
        }
      }

      return currentResultValue(numbers);
    },
    array: (input) => {
      const currentResultValue = resultValue(input);
      const inputArray = input.split(/\s/);
      for (let i = 0, len = inputArray.length; i < len; i += 1) {
        const operation = operations(inputArray[i]);
        if (operation) {
          operationFn(numbers)(operation);
        } else if (inputArray[i]) {
          pushingFn(numbers)(inputArray[i]);
        }
      }

      return currentResultValue(numbers);
    },
    undefined: () => console.log('type dosen\'t exist'),
  };

  return itaeationType[type];
};

module.exports = runPN;
