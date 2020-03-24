const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    pictures: {
      type: Array
    },
    hostel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hostel',
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('Room', roomSchema);
