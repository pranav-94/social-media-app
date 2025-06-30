```markdown
# SocialPulse

SocialPulse is a dynamic social media platform designed to connect people, share content, and build communities. This application is built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **User Authentication**: Secure user registration and login with JWT.
- **User Profiles**: Create and customize user profiles.
- **Post Creation**: Share text, images, and videos with your followers.
- **Comments**: Engage with posts through likes and comments.
- **Friend Requests**: Connect with other users and build your network.
- **Search Functionality**: Find users and content with ease.
- **Responsive Design**: Seamless experience across all devices.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, Tailwind

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/socialpulse.git
   cd socialpulse
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add necessary environment variables (e.g., `MONGO_URI`, `JWT_SECRET`).

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory if needed for environment variables (e.g., `REACT_APP_API_URL`).

## Running the Application

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Start the server:
   ```bash
   npm start
   # or using nodemon for development
   # npm run dev
   ```

### Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Start the development server:
   ```bash
   npm start
   ```

The application should now be running, typically with the frontend accessible at `http://localhost:3000` and the backend API at `http://localhost:5000` (or whatever ports are configured).
```