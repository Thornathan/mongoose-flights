const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    timestamps: true
});

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date
});

const flightsSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        default: "N/A"
    },
    airport: {
        type: String,
        enum: ['AUS', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        require: Number,
        default: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear();
        },
        min: 2020
    },
    destinations: {
      type: [destinationSchema],
      default: 'N/A'
  }
})

module.exports = mongoose.model('Flight', flightsSchema);