const express = require('express');
const faqController = require('./controllers/faqController');
const path = require('path');

const app = express();

// Serve static files (your HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', faqController);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

