const mongoose = require('mongoose');

const elementTestSchema = mongoose.Schema({
  titre: { type: String, required: true },
  nb: { type: Number, required: true },
  type: { type: String, required: true }
});

module.exports = mongoose.model('ElementTest', elementTestSchema);