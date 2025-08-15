const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/sprints', (req, res) => {
  res.send([]); // Placeholder for sprints
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
