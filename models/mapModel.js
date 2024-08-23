const mongoose = require('mongoose');

const polygonSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Polygon'],
  },
  coordinates: {
    type: [[[Number]]],
    required: true,
  },
});

const MapModel = mongoose.model('Map', polygonSchema);

module.exports = { MapModel };