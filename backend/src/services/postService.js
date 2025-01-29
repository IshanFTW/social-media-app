import Post from '../models/Post.js';

export const createPost = async (content, userId) => {
  return await Post.create({
    content,
    author: userId,
  });
};

export const getAllPosts = async () => {
  return await Post.find()
    .populate('author', 'username')
    .populate('comments.author', 'username')
    .sort({ createdAt: -1 });
};

export const toggleLike = async (postId, userId) => {
  const post = await Post.findById(postId);
  const likeIndex = post.likes.indexOf(userId);
  
  if (likeIndex === -1) {
    post.likes.push(userId);
  } else {
    post.likes.splice(likeIndex, 1);
  }
  
  return await post.save();
};

export const addComment = async (postId, userId, content) => {
  const post = await Post.findById(postId);
  post.comments.push({
    author: userId,
    content,
  });
  return await post.save();
}; 