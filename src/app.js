
// const X = require('xss'); //test esLint
const path = require('path');
const express = require('express');
const { createBookingsRouter } = require('./bookingsRouter');
const { createEventsRouter } = require('./eventsRouter');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

function createApp(deps = {}) {
  const app = express();
  app.use(express.json());
  app.use(express.static(PUBLIC_DIR));

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // The booking page: event.js reads the event id from the URL
  app.get('/events/:id', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIR, 'event.html'));
  });

  app.use('/api/events', createEventsRouter(deps));
  app.use('/bookings', createBookingsRouter(deps));

  return app;
}

module.exports = { createApp };