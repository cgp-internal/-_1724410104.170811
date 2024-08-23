const express = require('express');
const apiRouter = express.Router();

const { mapController } = require('./controllers/mapController');

apiRouter.get('/polygons', async (req, res) => {
  await mapController.getPloygonBoundaries(req, res);
});

apiRouter.post('/flightRequest', async (req, res) => {
  await mapController.processFlightRequest(req, res);
});

module.exports = { apiRouter };