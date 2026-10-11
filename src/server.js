const { createApp } = require('./app');

const PORT = process.env.PORT || 3000;
createApp().listen(PORT, () => {
  console.log(`UniEvents booking service running on port ${PORT} - http://localhost:3000/health`);
});