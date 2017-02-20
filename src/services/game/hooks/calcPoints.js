'use strict';

module.exports = function(options) {
  return function(hook) {
    const { dice1, dice2 } = hook.data
    if (dice1 && dice2) {
      console.log('I am waiting for Vincent');
      console.log(dice1);
      console.log(dice2);
      var roundRoll
      if ((dice1 === 1 && dice2 === 2) || (dice1 === 2 && dice2 === 1)) {
        console.log('You are unbeatable')
      } else if (dice1 === dice2) {
        roundRoll = dice1 * 100
        console.log('Everyone can do better:', roundRoll);
      } else if (dice1 > dice2) {
        roundRoll = (dice1 * 10) + dice2
        console.log('Everyone can do better:', roundRoll);
      } else if (dice2 > dice1) {
        roundRoll = (dice2 * 10) + dice1
        console.log('Everyone can do better:', roundRoll);
      }
    }

    return hook.app.service('games').get(hook.id).then((game) => {
      console.log(game.players);
      game.players.forEach((player) => {
        if (hook.params.user._id.toString() === player.userId.toString()) {
          player.dice1 = dice1
          player.dice2 = dice2
          player.roundRoll = roundRoll
        }
      })
      console.log(game.players);
    })
  }
}
