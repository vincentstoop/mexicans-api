'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  userName: {type: String, required: true},
  gameStarted: { type: Boolean, required: true, 'default': false },
  lifesLeft: { type: Number, required: true, 'default': 6 },
  roundRoll: { type: Number, required: true, 'default': 0 },
  currentPlayer: { type: Boolean, required: true, 'default': false },
  roundPlayed: { type: Boolean, required: true, 'default': false },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameSchema = new Schema({
  gameMasterId: { type: Schema.Types.ObjectId, ref: 'user' },
  title: { type: String, required: true },
  players: [ playerSchema ],
  rounds: { type: Number, required: true, 'default': 0 },
  pin: { type: Number, required: false },
  gameStarted: { type: Boolean, required: true, 'default': false },
  createdAt: {
    type: Date,
    'default': Date.now
  },
  updatedAt: {
    type: Date,
    'default': Date.now
  }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
