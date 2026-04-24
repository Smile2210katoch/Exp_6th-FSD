# JWT Authentication Backend - Experiment 6

This project implements JWT (JSON Web Token) authentication in a Node.js backend using Express.js.

## Features

- User login with username and password
- JWT token generation upon successful login
- Protected routes that require valid JWT token
- Token validation middleware

## Project Structure

```
src/
├── controllers/
│   └── authController.js  # Handles login and protected route logic
├── middleware/
│   └── authMiddleware.js  # JWT token verification middleware
├── models/
│   └── userModel.js      # User data model (in-memory for demo)
├── routes/
│   └── authRoutes.js     # Authentication routes
├── server.js             # Main server file
└── .env                  # Environment variables
```

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables in `.env`:
   ```
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```
   or for development:
   ```
   npm run dev
   ```

2. The server runs on `http://localhost:5000`

## API Endpoints

### POST /auth/login
- **Body**: `{ "username": "user123", "password": "password123" }`
- **Response**: `{ "token": "jwt_token_here" }`

### GET /auth/protected
- **Headers**: `Authorization: Bearer jwt_token_here`
- **Response**: `{ "message": "Access granted to protected route", "user": {...} }`

## Testing with Postman

1. **Login Request**:
   - Method: POST
   - URL: `http://localhost:5000/auth/login`
   - Body: raw JSON
     ```json
     {
       "username": "user123",
       "password": "password123"
     }
     ```
   - Expected Response: JWT token

2. **Access Protected Route**:
   - Method: GET
   - URL: `http://localhost:5000/auth/protected`
   - Headers: `Authorization: Bearer <jwt_token>`
   - Expected Response: Protected data

## Implementation Details

- **Authentication**: Uses bcrypt for password hashing
- **Token Generation**: JWT with 1-hour expiration
- **Middleware**: Verifies JWT token for protected routes
- **User Storage**: In-memory array (for demo purposes)

## Screenshots

Place your Postman screenshots in the `screenshots/` folder:
- login_request.png
- jwt_token_response.png
- protected_route_access.png

## Dependencies

- express: Web framework
- jsonwebtoken: JWT handling
- bcryptjs: Password hashing
- dotenv: Environment variables

This implementation demonstrates basic JWT authentication flow suitable for web applications.