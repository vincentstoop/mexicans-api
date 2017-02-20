'use strict';

// const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    if (hook.data.joingame) {
      return hook.app.service('games').get(hook.id).then((game) => {
        // console.log(game.players);
        if (hook.params.user._id !== game.gameMasterId) {
          const userIsPlayer = game.players.some((player) => {
            return player.userId.toString() === hook.params.user._id.toString()
          })
          if (!userIsPlayer) {
            const newPlayer = {
              userId: hook.params.user._id,
              userName: hook.params.user.name
            };
            hook.data.players = [].concat(game.players, newPlayer);
          }
        }
      })
    }
  }
}
