const mongoose = require('mongoose');

const hostelOwnerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  surname: {
    type: String
  },
  phone: {
    type: [String], // Can have multiple phone numbers
    required: true
  },
  address: String
});

module.exports = mongoose.model('Hostel_Owner', hostelOwnerSchema);
