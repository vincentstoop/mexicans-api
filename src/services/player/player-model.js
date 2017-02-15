'use strict';

// player-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  lifesLeft: { type: Number, required: true, 'default': 6 },
  roundRoll: { type: Number, required: true, 'default': 0 },
  roundPlayed: { type: Boolean, required: true, 'default': false },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const playerModel = mongoose.model('player', playerSchema);

module.exports = playerModel;
