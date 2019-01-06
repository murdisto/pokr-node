const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  location: {type: String, required: true},
  date: {type: String,required: true},
  game: {type: String},
  stakes: {type: String},
  cashIn: {type: Number, required: false},
  cashOut: {type: Number, required: false},
  hours: {type: Number, required: false},
  minutes: {type: Number, required: false},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

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
