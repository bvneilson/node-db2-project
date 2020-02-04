const express = require('express');
const carsRoutes = require('./carsRoutes.js');

const port = 5000;
const server = express();

server.use(express.json());
server.use('/api/cars', carsRoutes);

server.listen(port, () => console.log(`Listening for changes on port ${port}`));
