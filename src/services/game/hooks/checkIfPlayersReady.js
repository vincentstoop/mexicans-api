'use strict';


module.exports = function(options) {
  return function(hook) {
    if (hook.data.allPlayersReady) {
      return hook.app.service('games').get(hook.id).then(game => {
        var check = game.players.every(player => {
          return player.gameStarted === true;
        });
        console.log(check);

        hook.data.playersReady = check;
      })
    }
  }
}
