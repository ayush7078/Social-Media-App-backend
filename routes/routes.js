const express = require('express');
const { register, login } = require('../controllers/authController');
const { createPost, getPosts } = require('../controllers/postController');
const { addComment } = require('../controllers/commentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

//auth routes
router.post('/auth/register', register);
router.post('/auth/login', login);

//post routes
router.post('/posts/createpost', protect, createPost);
router.get('/posts/getposts', getPosts);

//comment routes
router.post('/comments/addcomment', protect, addComment);

module.exports = router;
