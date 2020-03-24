const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: Array, // Co-ordinate of the accomodation [lat, long]
    description: {
      type: String,
      required: true
    },
    overall_price: {
      type: Number,
      required: true
    },
    amenities: {
      type: Array
    },
    type: {
      type: String,
      required: true
    },
    pictures: {
      type: Array
    },
    featured: {
      type: Boolean,
      required: true,
      default: false
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'hostel_owners'
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('Hostel', hostelSchema);
