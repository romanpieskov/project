const express = require('express');

const app = express();

app.get('/api/admin', (req, res) => {
  
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);