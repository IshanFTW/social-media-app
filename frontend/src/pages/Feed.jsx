import { useState, useEffect } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { posts } from '../services/api';
import PostCard from '../components/PostCard';

const Feed = () => {
  const [postContent, setPostContent] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    try {
      const { data } = await posts.getAll();
      setAllPosts(data);
    } catch (error) {
      setError('Failed to fetch posts');
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      await posts.create(postContent);
      setPostContent('');
      fetchPosts();
    } catch (error) {
      setError('Failed to create post');
      console.error('Error creating post:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <form onSubmit={handleCreatePost}>
          <TextField
            fullWidth
            multiline
            rows={3}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="What's on your mind?"
            sx={{ mb: 2 }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            disabled={!postContent.trim()}
          >
            Post
          </Button>
        </form>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>
        )}

        <Box sx={{ mt: 4 }}>
          {allPosts.map((post) => (
            <PostCard 
              key={post._id} 
              post={post} 
              onUpdate={fetchPosts}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Feed; 