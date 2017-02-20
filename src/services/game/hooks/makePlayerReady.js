'use strict';

// const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    if (hook.data.playerready) {
      return hook.app.service('games').get(hook.id).then((game) => {
        var newarray = game.players.map((player) => {
          if (player.userId.toString() === hook.params.user._id.toString()) {
            player.gameStarted = true;
          }
          return player
        })

        hook.data.players = newarray
      })
    }
  }
}
