'use strict';

module.exports = function(options) {
  return function(hook) {
    if (hook.data.dice1 && hook.data.dice2) {
      console.log('I am waiting for Vincent');
      console.log(hook.data.dice1);
      console.log(hook.data.dice2);
    }
  }
}
