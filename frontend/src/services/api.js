import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  signup: (userData) => api.post('/users/signup', userData),
  login: (credentials) => api.post('/users/login', credentials),
  logout: () => api.post('/users/logout'),
};

export const posts = {
  create: (content) => api.post('/posts', { content }),
  getAll: () => api.get('/posts'),
  like: (postId) => api.post(`/posts/${postId}/like`),
  comment: (postId, content) => api.post(`/posts/${postId}/comments`, { content }),
};

export default api; 