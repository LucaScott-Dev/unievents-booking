const express = require('express');
// const X = require('xss');
const { createBookingsRouter } = require('./bookingsRouter');

function createApp(deps = {}) {
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

    app.use('/bookings', createBookingsRouter(deps));

  return app;
}

module.exports = { createApp };