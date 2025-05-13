const express = require('express');
const path = require('path');
const app = express();

const buildPath = path.join(__dirname, 'dist');

// Serve static files
app.use(express.static(buildPath));

// Handle all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Listen on all network interfaces
const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});