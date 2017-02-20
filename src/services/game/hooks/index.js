'use strict';

// const globalHooks = require('../../../hooks');
// const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');

const createGame = require('./createGame');
const joinGame = require('./joinGame');
const calcPoints = require('./calcPoints');
const populateGameMaster = common.populate('gameMaster', {
  service: 'users',
  field: 'gameMasterId'
});

exports.before = {
  all: [
    auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [createGame()],
  update: [
    joinGame(), calcPoints()
  ],
  patch: [
    joinGame(), calcPoints()
  ],
  remove: []
};

exports.after = {
  all: [populateGameMaster],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
