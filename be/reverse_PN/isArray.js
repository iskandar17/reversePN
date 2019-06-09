const isArray = some => Object.prototype.toString.call(some) === '[object Array]';
module.exports = isArray;
