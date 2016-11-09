var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1, // means there must be at least 1 character
    trim: true //trims off leading or trailing white space. means a single space will pass minlength, but not after trim
  },
  completed: {
    type: Boolean,
    default: false //sets default value
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
