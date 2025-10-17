const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const frontendDir = path.join(__dirname, 'frontend');

// Serve static files from frontend
app.use(express.static(frontendDir));

// Respond to GET / with admin_site.html
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'admin_site.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
