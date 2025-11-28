# Proxy server

Small Node/Express proxy server using http-proxy-middleware for development and local testing.

Features:

- Proxy requests matching a prefix (default `/api`) to a target server
- Configurable via `.env`
- Simple local target server included for manual testing (`target-server.js`)

Usage

1. Install deps in the folder:

```bash
cd "Proxy server"
npm install
```

2. Start the target server (for testing):

```bash
npm run test-target
```

3. Start the proxy server (in another terminal):

```bash
npm start
```

4. Test:

- GET http://localhost:8080/ -> returns proxy status
- GET http://localhost:8080/api/ping -> proxied to http://localhost:9000/ping
- POST http://localhost:8080/api/echo -> proxied and returns request body

Configuration

Copy `.env.example` to `.env` to change port, prefix and target.

Notes

The proxy server logs debug info from http-proxy-middleware. For production usage, add security and validation as needed.
