const Comment = require('../models/Comment');
const { getIoInstance } = require('../services/chat'); // Import the getter
const Post = require('../models/Post');

// Add Comment
exports.addComment = async (req, res) => {
  try {
    const { text, postId } = req.body;
    const userId = req.user._id;

    console.log(req.user); 

    // Create the comment
    const comment = await Comment.create({ text, post: postId, user: userId });
  // get the post details using postId
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Get the io instance and emit the event
    try {
      const io = getIoInstance(); 
      io.emit('newComment', {
        username: req.user.name,
        text: comment.text,
        postId: postId,
        postText: post.text,
      });
    } catch (err) {
      console.error('Failed to emit event:', err.message);
    }

    res.status(201).json({ message: 'Comment added', comment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
