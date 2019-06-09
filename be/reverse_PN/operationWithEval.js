// unsafe
const colculate = (n1, op, n2) => {
  const operators = new Set(['+', '-', '/', '*']);
  if (operators.has(op)) {
    return eval(`${n1} ${op} ${n2}`);
  }

  return NaN;
};

module.exports = colculate;
