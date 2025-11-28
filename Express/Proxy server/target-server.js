// Simple target server used for manual testing
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.TARGET_PORT || 9000;

app.get('/ping', (req, res) => {
  res.json({ success: true, message: 'pong from target' });
});

app.post('/echo', (req, res) => {
  res.json({ echoed: req.body });
});

app.get('/slow', (req, res) => {
  // simulate slow response
  setTimeout(() => {
    res.json({ slow: true });
  }, 500);
});

app.listen(PORT, () => console.log(`Target test server listening on http://localhost:${PORT}`));
