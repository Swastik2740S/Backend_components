# 🔐 Session-Based Authentication Backend

This project demonstrates session-based authentication for backend services.
It’s built to be modular, secure, and beginner-friendly, making it easy to learn and integrate with real-world applications.


## Features

- User registration and login
- Session-based authentication
- Password hashing
- Role-based access control
- API endpoints for authentication

## 🛠️Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt

# ⚙️ How Session Auth Works
- User logs in with email & password.
- Server verifies the credentials and stores user info in a session (saved in memory or DB).
- A session ID is sent back to the client inside a cookie.
- On each request, the cookie is checked → if valid, the user stays logged in.
- On logout, the session is destroyed and the cookie becomes invalid.

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

| Method | Endpoint         | Description           |
|--------|-----------------|----------------------|
| POST   | /register       | Register new user    |
| POST   | /login          | User login           |
| GET    | /profile        | Get user profile     |

## License

This project is licensed under the MIT License.