import * as postService from '../services/postService.js';

export const createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body.content, req.user._id);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const post = await postService.toggleLike(req.params.id, req.user._id);
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const commentPost = async (req, res) => {
  try {
    const post = await postService.addComment(
      req.params.id,
      req.user._id,
      req.body.content
    );
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 