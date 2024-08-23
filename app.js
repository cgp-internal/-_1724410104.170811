const express = require('express');
const app = express();
const { apiRouter } = require('./routes/index');
const { MapModel } = require('./models/mapModel');
const { mapService } = require('./services/mapService');

app.use(express.json());
app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});