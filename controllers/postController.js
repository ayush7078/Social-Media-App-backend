const Post = require('../models/Post');

// Create Post
exports.createPost = async (req, res) => {

  try {
    const { text, media } = req.body;
    const userId = req.user._id;
    console.log("req.user", req.user);
    
    const post = await Post.create({ text, media, user: userId });
    res.status(201).json({ message: 'Post created Successfully'});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get Posts
exports.getPosts = async (req, res) => {

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
  
    const posts = await Post.find()
      .populate('user', 'name')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPosts = await Post.countDocuments();

    res.status(200).json({ data: posts, count: totalPosts });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
