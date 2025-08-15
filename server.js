const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.static('public')); // Serve static files from the 'public' directory

// API endpoint to fetch sprints data.
// Currently returns an empty array as a placeholder.
app.get('/api/sprints', (req, res) => {
  res.send([]); // Placeholder for sprints, to be replaced with actual data retrieval
});

// Start the server and listen on specified PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});