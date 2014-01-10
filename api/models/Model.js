/*
 * Dependencies
 */
var mongoose = require('mongoose');

/*
 * Schema
 */
var Schema = new mongoose.Schema({
  name: { type: 'String' },
});

/*
 * Export model
 */
module.exports = mongoose.model('Model', Schema);
