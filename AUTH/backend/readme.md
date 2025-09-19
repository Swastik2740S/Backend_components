# AUTH Backend

This project provides authentication components for backend services. It is designed to be modular, secure, and easy to integrate with various applications.

## Features

- User registration and login
- Session-based authentication
- Password hashing
- Role-based access control
- API endpoints for authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt

## Getting Started

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure environment variables in `.env`:
    ```
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
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