const express = require('express');
const path = require('path');
const app = express();

const buildPath = path.join(__dirname, 'dist');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
});
