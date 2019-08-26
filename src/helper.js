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

exports.executeIfEven = function (number, callback) {
  if (number % 2 === 0) {
    callback(number);
  }
};

exports.asyncThing = function (callback) {
  return new Promise((resolve) => { // don't forget to return!
    setTimeout(() => {
      callback(); // looks like we will need a spy
      resolve(7);
    }, 1000); // will this block the test for a full second??
  });
}
