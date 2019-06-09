const runner = require('./runner');

const reversePN = (reverseType) => {
  const prevData = {};

  return (str) => {
    if (prevData[str]) return prevData[str];

    const result = runner(reverseType)(str);
    prevData[str] = result;

    return result;
  };
};

module.exports = reversePN;
