const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Fallback to index2.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index2.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 