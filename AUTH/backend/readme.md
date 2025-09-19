# AUTH Backend

This project provides authentication components for backend services. It is designed to be modular, secure, and easy to integrate with various applications.

## Features

- User registration and login
- Session-based authentication
- Password hashing
- API endpoints for authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt

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
| POST   | /api/user       | create new user      |
| POST   | /api/auth/login | User login           |

## License

This project is licensed under the MIT License.