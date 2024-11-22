# Social Media Backend

This is the backend for a simplified social media platform.

## Features
- User Authentication with JWT
- Post creation with optional media
- Commenting on posts
- Real-time chat and notifications using WebSockets
- Pagination for posts

## Installation
1. Clone the repository:
   git clone https://github.com/your-repo/social-media-backend.git


2. Install dependencies:
cd backend
npm install

3. Add a .env file with the following variables:
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Start the server:
npm run dev

# API Endpoints
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in a user
POST /api/posts: Create a post (requires authentication)
GET /api/posts: Fetch all posts (supports pagination)
POST /api/comments: Add a comment to a post (requires authentication)

