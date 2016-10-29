var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now }, 
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Todo', TodoSchema);