'use strict';

const service = require('feathers-mongoose');
const player = require('./player-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: player,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/players', service(options));

  // Get our initialize service to that we can bind hooks
  const playerService = app.service('/players');

  // Set up our before hooks
  playerService.before(hooks.before);

  // Set up our after hooks
  playerService.after(hooks.after);
};
