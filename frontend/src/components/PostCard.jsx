import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { posts } from "../services/api";
import { useAuth } from "../contexts/AuthContext";

const PostCard = ({ post, onUpdate }) => {
  const [comment, setComment] = useState("");
  const { user } = useAuth();

  const handleLike = async () => {
    try {
      await posts.like(post._id);
      onUpdate();
    } catch (error) {
      console.error("Failed to like post:", error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      await posts.comment(post._id, comment);
      setComment("");
      onUpdate();
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{post.author.username}</Typography>
        <Typography variant="body1">{post.content}</Typography>
        <Typography variant="caption">
          Likes: {post.likes.length} | Comments: {post.comments.length}
        </Typography>

        <IconButton
          onClick={handleLike}
          color={post.likes.includes(user?._id) ? "primary" : "default"}
        >
          ❤️
        </IconButton>

        <form onSubmit={handleComment}>
          <TextField
            fullWidth
            size="small"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            sx={{ mt: 2 }}
          />
          <Button type="submit" variant="contained" size="small" sx={{ mt: 1 }}>
            Comment
          </Button>
        </form>

        {post.comments.map((comment, index) => (
          <Typography key={index} variant="body2" sx={{ mt: 1 }}>
            <strong>{comment.author.username}:</strong> {comment.content}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default PostCard;
