## Backend Project with Social Media Features and Real-Time Chat and Notification
This backend project provides a robust foundation for  user authentication, post creation, commenting features and real-time chat and Notification. The project is built using Node.js, Express.js, MongoDB, and Socket.IO.

# Features
1. Authentication
User registration and login using JWT for secure access.

2. Real-Time Chat
Public and private messaging via Socket.IO.

3. Post Management
Create, retrieve, and manage posts with pagination.

4. Comments and Notifications
Add comments to posts and notify users in real-time.

5. API Documentation
Detailed API documentation using Swagger.

# Getting Started
- Installation

1. Clone the repository:
git clone https://github.com/ayush7078/Social-Media-App-backend.git
cd Social-Media-App-backend

2. Install dependencies:
npm install
Create a .env file in the root directory and configure the following variables:
PORT=5000, MONGO_URI, JWT_SECRET

3. Start the development server:
npm start

# Dependencies
- express: Web framework
- mongoose: MongoDB ORM
- socket.io: Real-time communication
- bcrypt: Password hashing
- jsonwebtoken: Token-based authentication
- swagger-ui-express: API documentation
- dotenv: Environment variable management


# Folder Structure

- |-- config/
- |   |-- db.js               # MongoDB connection
- |-- controllers/
- |   |-- authController.js   # Authentication logic
- |   |-- postController.js   # Post management
- |   |-- commentController.js # Commenting and notification
- |-- docs/
- |   |-- Database_Schema.json # Database Scehma Design
- |-- middleware/
- |   |-- authMiddleware.js   # JWT authentication middleware
- |-- models/
- |   |-- User.js             # User schema
- |   |-- Post.js             # Post schema
- |   |-- Comment.js          # Comment schema
- |-- routes/
- |   |-- routes.js           # API routes
- |-- services/
- |   |-- chat.js             # Real-time chat logic
- |-- swagger/
- |   |-- swagger.json        # API documentation
- |-- utils/
- |   |-- errorHandler.js     # Error-handling middleware
- |-- server.js               # Main server file


# Database Schema Design
- [JSON-based schema](./docs/Database_Schema.json)

# API Endpoints
- Authentication
1. Method	    Endpoint	          Description
   POST	   /api/auth/register	Register a new user
   POST	   /api/auth/login	   Login and get a token

 - Post Management
2. Method	Endpoint	                  Description
    POST	   /api/posts/createpost	Create a new post
    GET	   /api/posts/getposts	   Get all posts (paginated)

- Comments
3. Method	    Endpoint	                    Description
    POST	     /api/comments/addcomment	   Add a comment to a post

- Real-Time Chat
Event Name	Description
chatMessage	Broadcasts a public chat message
newComment	Notifies all users about a new comment
privateMessage	Sends a private message to a user

# Real-Time Chat
- How It Works
Public Chat: All connected users can send and receive messages.
Private Messaging: Users can send direct messages using socket.io rooms.
Notifications: Real-time notifications when comments are added.

- Usage
Integrate the chat functionality into the frontend with the provided socket events.

# API Documentation

Accessing the Documentation
1. Once the server is running, the API documentation is available at:
http://localhost:5000/api-docs