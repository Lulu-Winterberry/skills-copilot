// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route
// 4. Return response
// 5. Start server

// 1. Create web server
const http = require('http');
const server = http.createServer();

// 2. Create router
const router = require('./router');

// 3. Create route
const comments = require('./comments');

// 4. Return response
server.on('request', (request, response) => {
    router(request, response, comments);
});

// 5. Start server
server.listen(8080, () => console.log('Server running on port 8080'));