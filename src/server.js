const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`UniEvents booking service running on port ${PORT}`);
});