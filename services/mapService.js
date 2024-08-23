const { MapModel } = require('./models/mapModel');

class MapService {
  async getPloygonBoundaries() {
    try {
      const polygons = await MapModel.find().exec();
      return polygons;
    } catch (error) {
      throw new Error(`Error fetching polygon boundaries: ${error.message}`);
    }
  }

  async processFlightRequest(flightRequest) {
    try {
      const polygons = await this.getPloygonBoundaries();
      // Implement logic to process flight request based on polygon boundaries
      // For demonstration purposes, assume we have a function to check if a point is inside a polygon
      const pointInsidePolygon = (point, polygon) => {
        // Implement point-in-polygon algorithm
        // For demonstration purposes, return a random boolean value
        return Math.random() < 0.5;
      };

      const requestPoint = [flightRequest.longitude, flightRequest.latitude];
      for (const polygon of polygons) {
        if (pointInsidePolygon(requestPoint, polygon.coordinates)) {
          return { allowed: true, polygonId: polygon._id };
        }
      }

      return { allowed: false };
    } catch (error) {
      throw new Error(`Error processing flight request: ${error.message}`);
    }
  }
}

const mapService = new MapService();

module.exports = { mapService };