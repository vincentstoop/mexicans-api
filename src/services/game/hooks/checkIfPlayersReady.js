'use strict';

// const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id).then(game => {
      var check = game.players.every(player => {
        return player.gameStarted === true;
      });

      game.playersReady = check;
      hook.result = game;
      // hook.data.playersReady = check
    });
  };
};
