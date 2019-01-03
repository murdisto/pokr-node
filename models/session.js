const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  location: {type: String, required: true},
  date: String,
  game: {type: String},
  stakes: {type: String},
  cashIn: {type: Number, required: true},
  cashOut: {type: Number, required: true},
  hours: {type: Number, required: true},
  minutes: {type: Number, required: true}
});

// Add `createdAt` and `updatedAt` fields
sessionSchema.set('timestamps', true);

// Transform output during `res.json(data)`, `console.log(data)` etc.
sessionSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Session', sessionSchema);
