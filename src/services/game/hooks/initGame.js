'use strict';

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    if (hook.data.initGame) {
      return hook.app.service('games').get(hook.id).then((game) => {
        if (hook.params.user._id.toString() !== game.gameMasterId.toString()) {
          throw new errors.Forbidden('You must be the game master to do that.');
        }
        hook.data.gameStarted = true
      })
    }
  }
}
