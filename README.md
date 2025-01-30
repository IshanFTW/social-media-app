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

