# 🔐 Session-Based Authentication Backend

This project demonstrates session-based authentication for backend services.
It’s built to be modular, secure, and beginner-friendly, making it easy to learn and integrate with real-world applications.


## Features

- ✅ User registration & login
- ✅ Session-based authentication (using express-session)
- ✅ Secure password hashing with bcrypt
- ✅ Middleware to protect routes
- ✅ Modular project structure
- ✅API endpoints for authentication

## 🛠️Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt

# ⚙️ How Session Auth Works
- User logs in with email & password.
- Server verifies the credentials and stores user info in a session (saved in browser or in postman/thunderclient cookie jar).
- A session ID is stored inside the browser client inside a cookie.
- On each request, the cookie is checked → if valid, the user stays logged in.
- On logout, the session is destroyed and the cookie becomes invalid.
# Note: In the postman/thunderclient cookies are stored once per request so you have to enable cookie jar to request furthur routes.

# Flowchart for better understanding
<img width="2090" height="1102" alt="5378701c-1eab-41dd-92c6-41d3bbbad7f9" src="https://github.com/user-attachments/assets/6189d9c2-06b8-437b-9b2d-d49923370137" />


## Getting Started

1. Clone the repository:
    ```bash
    git clone <https://github.com/Swastik2740S/Backend_components.git>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure environment variables in `.env`:
    ```
    MONGO_URI=<your-mongodb-uri>
    PORT = <port number>
    session = <sesion secret key>
    
    ```
4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| POST   | /api/user       | create new user      |
| POST   | /api/auth/login | User login           |
| GET    | /api/user       | Get all user         |


# 📡 API Endpoints

- 🔹 Login
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}

- 🔹 Register a new user
POST /api/user
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}

- 🔹 Get All (This endpoint contains the session auth without the session id you cant get all users)
GET /api/user
{
  "email": "test4gmail.com",
  "password": "test4123"
}

# 📚 Learning Goals
- By exploring this project, you’ll learn:
- The Client Based Session authentication
- How to secure passwords using bcrypt
- How to use express-session for managing user sessions
- How cookies work in authentication

## License

This project is licensed under the MIT License.
