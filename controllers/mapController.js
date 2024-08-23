const { mapService } = require('../services/mapService');
const { MapModel } = require('../models/mapModel');

class MapController {
  async getPloygonBoundaries(req, res) {
    try {
      const polygons = await mapService.getPloygonBoundaries();
      res.json(polygons);
    } catch (error) {
      res.status(500).json({ message: `Error fetching polygon boundaries: ${error.message}` });
    }
  }

  async processFlightRequest(req, res) {
    try {
      const { longitude, latitude } = req.body;
      const result = await mapService.processFlightRequest({ longitude, latitude });
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: `Error processing flight request: ${error.message}` });
    }
  }
}

const mapController = new MapController();

module.exports = { mapController };