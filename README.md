# Social Media Application

A full-stack social media application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create accounts, share posts, like content, and interact through comments.

## Features

- **User Authentication**

  - Sign up with username and email
  - Secure login with JWT
  - Protected routes
  - Automatic token management

- **Posts Management**

  - Create new posts
  - View posts feed
  - Like/Unlike posts
  - Add comments to posts

- **Real-time Updates**

  - Instant feed updates
  - Like counter updates
  - Comment updates

- **Modern UI**
  - Material-UI components
  - Responsive design
  - Clean and intuitive interface

## Tech Stack

### Backend

- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS enabled

### Frontend

- React 18 (built with Vite)
- Material-UI for styling
- React Router v6
- Axios for API calls
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. **Clone the Repository**

```bash
git clone <repository-url>
cd social-media-app
```

2. **Backend Setup**

```bash
cd backend
npm install

# Create .env file with:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

3. **Frontend Setup**

```bash
cd ../frontend
npm install
```

### Running the Application

1. **Start Backend Server**

```bash
cd backend
npm run dev
```

2. **Start Frontend Development Server**

```bash
cd frontend
npm run dev
```

The application will be running at:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## API Endpoints

### Authentication Routes

```
POST /api/users/signup - Register new user
POST /api/users/login - Login user
POST /api/users/logout - Logout user
```

### Posts Routes

```
GET /api/posts - Get all posts
POST /api/posts - Create new post
POST /api/posts/:id/like - Like/Unlike post
POST /api/posts/:id/comments - Add comment to post
```

## Project Structure

```
social-media-app/
├── backend/
│   ├── src/
│   │   ├── config/         # Database and other configurations
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Custom middleware (auth, etc.)
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── server.js       # Entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/     # Reusable components
    │   ├── contexts/       # Context providers
    │   ├── pages/          # Page components
    │   ├── services/       # API services
    │   ├── App.jsx         # Root component
    │   └── main.jsx        # Entry point
    ├── index.html
    └── package.json
```

## Environment Variables

### Backend (.env)

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Secure HTTP headers
- Input validation

## Error Handling

The application includes comprehensive error handling for:

- API requests
- Authentication
- Database operations
- Form validations

## Future Enhancements

- [ ] Image upload support
- [ ] User profile customization
- [ ] Direct messaging
- [ ] Post sharing
- [ ] Notifications system

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

Common issues and solutions:

1. **MongoDB Connection Issues**

   - Verify MongoDB is running
   - Check connection string in .env
   - Ensure network connectivity

2. **JWT Token Issues**
   - Clear browser localStorage
   - Verify JWT_SECRET in .env
   - Check token expiration

## License

This project is licensed under the MIT License.

## Acknowledgments

- Material-UI for the component library
- MongoDB Atlas for database hosting
- React and Vite communities
