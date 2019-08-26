const uuid = require('uuid');

exports.sum = function (array) {
  return array.reduce((a, b) => {
    return a + b;
  })
};

exports.makeUser = function (first, last) {
  return {
    id: uuid(),
    fullname: `${first} ${last}`
  }
};

