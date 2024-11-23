// server.js

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const http = require('http');
const { Server } = require('socket.io');
const apiRoutes = require('./routes/routes');
const { errorHandlerMiddleware } = require('./utils/errorHandler');
const { setupChat } = require('./services/chat');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [""],  
    methods: ["GET", "POST"],
  },
});

// Initialize chat system
setupChat(io);  // Pass the `io` instance to the chat service

// Middleware and Routes
app.use(express.json());
app.use('/api', apiRoutes);
app.use(errorHandlerMiddleware);

// Serve Swagger API Documentation at /api-docs
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger/swagger.json'), 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to the database and start the server
connectDB();
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
