require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration
const PORT = process.env.PORT || 8080;
const TARGET = process.env.TARGET || 'http://localhost:9000';
const PREFIX = process.env.PREFIX || '/api';

// Basic health-check
app.get('/', (req, res) => {
  res.json({ message: 'Proxy server is running', target: TARGET, prefix: PREFIX });
});

// Create proxy middleware for matching PREFIX.
// All requests to /api/* will be forwarded to TARGET with the path preserved.
app.use(
  PREFIX,
  createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    pathRewrite: (path, req) => path.replace(new RegExp(`^${PREFIX}`), ''),
    onProxyReq: (proxyReq, req, res) => {
      // Example: attach a header for downstream servers if needed
      proxyReq.setHeader('X-Forwarded-By', 'proxy-server');
    },
    logLevel: 'debug'
  })
);

// Fallback route
app.use((req, res) => {
  res.status(404).json({ error: 'Not found by proxy' });
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://localhost:${PORT}`);
  console.log(`Proxying ${PREFIX} -> ${TARGET}`);
});
