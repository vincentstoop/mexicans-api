'use strict';

module.exports = function(options) {
  return function(hook) {
    const { dice1, dice2 } = hook.data
    if (dice1 && dice2) {
      var roundRoll
      if ((dice1 === 1 && dice2 === 2) || (dice1 === 2 && dice2 === 1)) {
        roundRoll = 1000
      } else if (dice1 === dice2) {
        roundRoll = dice1 * 100
      } else if (dice1 > dice2) {
        roundRoll = (dice1 * 10) + dice2
      } else if (dice2 > dice1) {
        roundRoll = (dice2 * 10) + dice1
      }
    }
    // console.log(hook.id);
    return hook.app.service('games').get(hook.id).then((game) => {
      game.players.forEach((player, index) => {
        if (hook.params.user._id.toString() === player.userId.toString()) {
          if (dice1 && dice2) {
            game.players[index].dice1 = dice1
            game.players[index].dice2 = dice2
            game.players[index].roundRoll = roundRoll
            hook.data.players = [].concat(game.players)
          }
        }
      })
    })
  }
}
