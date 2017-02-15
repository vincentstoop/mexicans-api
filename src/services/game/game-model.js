'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  gameMaster: { type: Schema.Types.ObjectId, ref: 'user' },
  title: { type: String, required: true },
  players: [ Schema.Types.ObjectId ],
  rounds: { type: Number, required: true, 'default': 0 },
  pin: { type: Number, required: false },
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
