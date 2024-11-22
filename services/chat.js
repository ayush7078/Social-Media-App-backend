let io; 
// Setup chat with the passed io instance
const setupChat = (socketIoInstance) => {
  io = socketIoInstance; // Assign the passed instance to the local variable

  const userSockets = new Map(); // Map to store user IDs and their corresponding socket IDs

  io.on('connection', (socket) => {
    console.log('New client connected');

    // Public Chat Functionality

    // Handle public chat messages
    socket.on('chatMessage', (message) => {
      console.log('Public chat message:', message);
      io.emit('chatMessage', message); // Broadcast the message to all connected clients
    });

    // Notify users when a comment is added
    socket.on('newComment', (comment) => {
      console.log('New comment notification:', comment);
      io.emit('newComment', comment); // Broadcast the comment notification to all clients
    });

    // Private Messaging Functionality

    socket.on('identify', (userId) => {
      userSockets.set(userId, socket.id); 
      socket.join(userId); 
      console.log(`User identified: ${userId}`);
    });

    socket.on('privateMessage', ({ senderId, receiverId, message }) => {
      console.log(`Private message from ${senderId} to ${receiverId}: ${message}`);
      io.to(receiverId).emit('privateMessage', { senderId, message }); // Send message to the receiver's room
    });

    // Handle client disconnection
    socket.on('disconnect', () => {
      console.log('Client disconnected');

      // Remove the user from the map
      userSockets.forEach((value, key) => {
        if (value === socket.id) {
          userSockets.delete(key);
          console.log(`User ${key} disconnected`);
        }
      });
    });
  });
};

// Getter to retrieve the io instance
const getIoInstance = () => {
  if (!io) {
    throw new Error('Socket.io instance is not initialized. Please call setupChat first.');
  }
  return io;
};

module.exports = { setupChat, getIoInstance };
